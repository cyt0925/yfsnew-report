"""首頁總覽／改單統計示範用的假資料：把「系統用了四個星期」演一遍。

全部是編的（PO 單號 1300000090xxxx、數量、金額都是亂數；品牌品名是市面上的公開商品名）。
做法：把系統的時鐘（db._local_now）暫時換成假的，一天一天照真的流程打 API——
匯入訂單彙總表、改數量、改交期、記「這一輪處理完成」、改 PO 狀態、拉單、驗收……
所以歷程、建檔日、修改紀錄的時間都是系統自己寫的，不用直接改資料庫。灌完把時鐘換回來。
"""
import datetime as dt, io, os, random, zipfile

import openpyxl

OMS = os.environ.get("YFS_OMS", "/home/user/yfs/coupang-oms")

HDR = ['訂單類型', '線別', 'PO單號', '到貨倉別', '地址', '交付日期', 'NO', 'SKU ID', '條碼(國條)', '永豐料號', '品牌', '品名', '下單數量(酷澎單位)', '出貨數量',
       '單位', '箱入數', '箱數', '酷澎下單單價(含稅)', '業務報價單價(含稅)', '核對單價', '報價備註', '箱單價(含稅)', '總計(含稅)', '總效期天數(day)', '允收效期',
       '備註', '有效期限', '製造日期', '日期格式', '瑪氏效期表Id', '原訂單拆出']        # 前 30 欄照整合表範例的表頭，最後一欄是匯入認得的「原訂單」

CATALOG = {
    "寶僑": [("幫寶適", "幫寶適 一級幫 紙尿褲 M 52片", "包", 4, 399), ("幫寶適", "幫寶適 清新幫 拉拉褲 L 38片", "包", 4, 429),
           ("好自在", "好自在 液體衛生棉 日用 24cm 10片", "包", 24, 119), ("Ariel", "Ariel 抗菌抗臭洗衣精補充包 1100g", "包", 6, 139),
           ("Ariel", "Ariel 4D 抗菌洗衣膠囊 32顆", "盒", 8, 329), ("飛柔", "飛柔 去屑洗髮精 750ml", "瓶", 12, 189),
           ("潘婷", "潘婷 乳液修護潤髮精華素 700ml", "瓶", 12, 199), ("海倫仙度絲", "海倫仙度絲 清涼薄荷洗髮乳 750ml", "瓶", 12, 219),
           ("歐樂B", "歐樂B 超細毛護齦牙刷 6入", "組", 12, 249), ("吉列", "吉列 鋒隱5 刮鬍刀片 4入", "盒", 10, 599),
           ("Downy", "Downy 衣物柔軟精補充包 1520ml", "包", 6, 169), ("風倍清", "風倍清 織物除菌消臭噴霧 370ml", "瓶", 12, 129)],
    "瑪氏": [("M&M's", "M&M's 牛奶巧克力 樂享包 160g", "包", 24, 99), ("士力架", "士力架 花生巧克力 家庭號 240g", "包", 24, 129),
           ("德芙", "德芙 絲滑牛奶巧克力 分享包 252g", "包", 12, 189), ("Skittles", "Skittles 彩虹糖 混合水果 151g", "包", 24, 79),
           ("Extra", "Extra 潔淨無糖口香糖 薄荷 瓶裝 62g", "瓶", 36, 69), ("偉嘉", "偉嘉 成貓乾糧 海洋魚 7kg", "袋", 2, 699),
           ("偉嘉", "偉嘉 妙鮮包 鮪魚 85g 12入", "盒", 8, 229), ("寶路", "寶路 成犬乾糧 牛肉蔬菜 8kg", "袋", 2, 749),
           ("西莎", "西莎 精緻餐盒 牛肉 100g 24入", "箱", 1, 799), ("皇家", "皇家 室內成貓 F32 4kg", "袋", 4, 1190),
           ("Sheba", "Sheba 日式黑罐 鮪魚 85g 24入", "箱", 1, 599), ("Airwaves", "Airwaves 極酷薄荷無糖口香糖 44g", "瓶", 36, 59)],
    "CPG-紙品": [("舒潔", "舒潔 棉柔舒適抽取衛生紙 100抽 60包", "箱", 1, 599), ("可麗舒", "可麗舒 柔拭紙巾 110抽 72包", "箱", 1, 569),
               ("春風", "春風 超細柔抽取式衛生紙 110抽 24包", "組", 3, 249), ("五月花", "五月花 厚棒廚房紙巾 60組 24捲", "箱", 1, 499),
               ("得意", "得意 連續抽取式花紋衛生紙 100抽 84包", "箱", 1, 629), ("倍潔雅", "倍潔雅 好韌真3層捲筒衛生紙 72捲", "箱", 1, 459)],
    "CPG-潔品": [("白蘭", "白蘭 動力配方洗碗精 檸檬 2.8kg", "瓶", 4, 129), ("妙管家", "妙管家 抗菌洗衣精 4000g", "瓶", 4, 149),
               ("魔術靈", "魔術靈 浴室清潔劑 噴槍瓶 500ml", "瓶", 12, 89), ("一匙靈", "一匙靈 抗菌EX 洗衣精補充包 1.5kg", "包", 6, 159),
               ("威猛先生", "威猛先生 地板清潔劑 2000ml", "瓶", 6, 119), ("花仙子", "花仙子 驅塵氏 除塵紙 30張", "包", 24, 69)],
}
PREFIX = {"寶僑": ("P", 1), "瑪氏": ("M", 2), "CPG-紙品": ("T", 3), "CPG-潔品": ("C", 4)}
LINE_SEQ = ['寶僑', '瑪氏', '寶僑', 'CPG-紙品', '瑪氏', '寶僑', 'CPG-潔品', '瑪氏', '寶僑', '瑪氏',
            '寶僑', 'CPG-紙品', '瑪氏', '寶僑', 'CPG-潔品', '寶僑', '瑪氏', 'CPG-紙品', '瑪氏', '寶僑']
N_NEW = [3, 2, 4, 1, 3, 2, 5, 2, 3, 1, 4, 2, 3, 2, 4, 1, 3, 2, 3, 3, 3]
WHS = ["TAO1", "TAO1", "TAO3", "TAO5", "TAO5", "TAO6", "TXRC8"]
GROUP = {"寶僑": "寶僑", "瑪氏": "瑪氏", "CPG-紙品": "紙潔", "CPG-潔品": "紙潔"}

# 每張有改的 PO 要記哪幾輪：(階段, 做了什麼, 主因, 誰改的 c＝酷澎匯入／m＝我方手動, 說明)
PLAN = {
    "寶僑": [
        [("1", ["qty"], ["庫存不足"], "m", "原廠缺貨，先出現有庫存"), ("2", ["qty", "date"], ["產能不及", "備貨時間不及"], "m", "改晚兩天到貨"), ("3", ["qty"], ["缺貨"], "m", "")],
        [("2", ["qty"], ["產能不及"], "m", ""), ("3", ["qty"], ["缺貨"], "m", "出貨前少 2 箱")],
        [("2", ["date"], ["約倉問題"], "c", "酷澎改倉"), ("3", ["qty"], ["運能問題"], "m", "")],
        [("1", ["qty"], ["庫存不足"], "m", ""), ("2", ["date"], ["約倉問題"], "m", "約不到倉，延一天")],
        [("1", ["qty"], ["商品配貨"], "m", "配貨量不足"), ("2", ["qty"], ["商品配貨"], "m", "")],
        [("1", ["qty"], ["庫存不足", "商品配貨"], "m", ""), ("2", ["date"], ["車趟考量"], "m", "併車")],
        [("2", ["split", "qty"], ["產能不及"], "c", "拆一項到新單")],
        [("1", ["date"], ["備貨時間不及"], "m", "")],
        [("1", ["qty"], ["暫不供貨"], "c", "酷澎下修")],
        [("1", ["qty"], ["庫存不足"], "m", "")],
    ],
    "瑪氏": [
        [("1", ["qty"], ["未達出貨數"], "m", "不足一棧板"), ("2", ["qty"], ["效期不足"], "m", "效期不到允收"), ("3", ["qty"], ["效期問題"], "m", "")],
        [("2", ["qty"], ["效期不足"], "m", ""), ("3", ["date"], ["約倉問題"], "c", "酷澎改到貨日")],
        [("1", ["date"], ["約倉問題"], "m", ""), ("2", ["qty"], ["效期不足"], "m", "")],
        [("1", ["qty"], ["酷澎取消"], "c", ""), ("2", ["date"], ["約倉問題"], "m", "")],
        [("2", ["date", "qty"], ["效期不足", "車趟考量"], "m", "瑪氏改 11 月車趟")],
        [("1", ["split"], ["單位不同"], "c", "盒／箱分開下")],
        [("1", ["qty"], ["停產"], "m", "")],
    ],
    "紙潔": [
        [("2", ["qty"], ["運能問題"], "m", "車裝不下"), ("3", ["qty"], ["運能問題"], "m", "")],
        [("2", ["split"], ["車趟考量"], "c", ""), ("3", ["date"], ["約倉問題"], "m", "")],
        [("1", ["date"], ["倉容量問題"], "c", "酷澎改倉"), ("2", ["date"], ["車趟考量"], "m", "")],
        [("1", ["date"], ["車趟考量"], "m", "")],
        [("1", ["qty"], ["未達出貨數"], "m", "")],
    ],
}


def build(s, verbose=True):
    """灌資料。回一個 dict：live（留著現場記的那張 PO）、after（處理完成後又改的）、today 等，錄影腳本要用。"""
    import due
    db, app = s.db, s.app
    rng = random.Random(20261116)
    real_now = db._local_now
    today = real_now().date()
    hol = due._holidays()
    is_work = lambda d: due._is_work(d, hol)      # noqa: E731

    # 工作天清單：四個星期前到兩個多星期後；T＝今天（今天不是工作天就取之前最近的一天）
    WD, d = [], today - dt.timedelta(days=28)
    while d <= today + dt.timedelta(days=24):
        if is_work(d):
            WD.append(d)
        d += dt.timedelta(days=1)
    T = max(i for i, x in enumerate(WD) if x <= today)
    idx_of = lambda day: max(i for i, x in enumerate(WD) if x <= day)      # noqa: E731

    class Clock:
        t = None
        def at(self, day, hh, mm):
            self.t = dt.datetime(day.year, day.month, day.day, hh, mm, rng.randint(3, 55), tzinfo=db.TAIPEI_TZ)
        def add(self, minutes):
            self.t += dt.timedelta(minutes=minutes, seconds=rng.randint(1, 40))
    ck = Clock()
    db._local_now = lambda: ck.t
    # 今天的事要排在「現在」之前：照比例塞進 08:40 ～（現在往前 20 分，最晚 16:40）
    end_today = min(real_now().replace(tzinfo=None) - dt.timedelta(minutes=20), dt.datetime.combine(today, dt.time(16, 40)))
    start_today = dt.datetime.combine(today, dt.time(8, 40))
    if end_today <= start_today:
        start_today = end_today - dt.timedelta(minutes=30)

    def today_at(frac):
        ck.t = (start_today + (end_today - start_today) * frac).replace(tzinfo=db.TAIPEI_TZ, microsecond=0)

    def login(name):
        c = app.test_client()
        assert c.post("/login", data={"username": name, "password": os.environ["YFS_DEMO_PW"]}).status_code == 302
        return c
    zhen, alice, jerry = login("小真"), login("Alice"), s.tc
    who_of = lambda po: alice if (po["line"] == "瑪氏" and po["seq"] % 3 != 0) or po["seq"] % 7 == 0 else zhen      # noqa: E731

    def ok(r, what=""):
        if r.status_code != 200:
            print("   [API 失敗]", what, r.status_code, (r.get_data(as_text=True) or "")[:200])
        return r

    # ---------------------------------------------------------- 編 PO
    pos, seq, no = [], 0, 13000000900100
    for k in range(T + 1):
        for _ in range(N_NEW[k % len(N_NEW)]):
            line = LINE_SEQ[seq % len(LINE_SEQ)]
            no += rng.randint(1, 9)
            items = rng.sample(range(len(CATALOG[line])), rng.randint(2, min(5, len(CATALOG[line]))))
            rows = []
            for j in sorted(items):
                brand, name, unit, box, price = CATALOG[line][j]
                boxes = rng.choice([10, 12, 15, 20, 24, 30, 36, 40, 50]) * (3 if box == 1 else 1)
                pre, n = PREFIX[line]
                rows.append({"sku": f"9{n}{j + 1:02d}{(j * 37 + 11) % 100:02d}55", "barcode": f"47199{n}{j + 1:02d}{(j * 53 + 7) % 1000:03d}08", "yf": f"{pre}9{n}00{j + 1:03d}",
                             "brand": brand, "name": name, "unit": unit, "box": box, "price": price, "qty": boxes * box, "ship": boxes * box})
            g = min(k + rng.choice([4, 5, 5, 6, 6, 7, 8]), len(WD) - 1)
            pos.append({"seq": seq, "no": str(no), "line": line, "grp": GROUP[line], "wh": rng.choice(WHS), "f": k, "dd": WD[g], "rows": rows, "status": "",
                        "pulled": False, "plan": [], "off": [], "last_round": -9, "type": "一般", "parent": "", "role": "", "recv": "未驗收", "born": False})
            seq += 1
    g_of = lambda p: idx_of(p["dd"])      # noqa: E731

    # ---------------------------------------------------------- 特別的幾張
    def pick(line, f_lo, f_hi, role, dd_idx=None):
        c = [p for p in pos if p["line"] == line and not p["role"] and f_lo <= p["f"] <= f_hi]
        if not c:
            print("   [注意] 找不到", line, role); return None
        p = c[len(c) // 2]
        p["role"] = role
        if dd_idx is not None:
            p["dd"] = WD[dd_idx]
        return p
    cut = idx_of(due.cutoff(today))
    live = pick("寶僑", T - 5, T - 3, "live", cut)                     # 留著現場記的那張：酷澎今天下修、還沒記過處理完成、到貨日剩 3 天
    afters = [pick("寶僑", T - 7, T - 4, "after", T + 2), pick("瑪氏", T - 7, T - 4, "after", T + 4), pick("CPG-紙品", T - 9, T - 3, "after", T + 5)]
    afters[0]["plan"] = [("1", ["qty"], ["庫存不足"], "m", "")]
    afters[1]["plan"] = [("1", ["qty"], ["未達出貨數"], "m", "")]
    afters[2]["plan"] = [("1", ["date"], ["車趟考量"], "m", "")]
    stuck = pick("瑪氏", T - 8, T - 6, "stuck", T - 1)                  # 過了到貨日還沒完成（快到貨那張卡的「已過 N 天」）
    cancel = pick("瑪氏", 3, 8, "cancel")
    raised = pick("CPG-潔品", T - 6, T - 2, "raised", T + 3)            # 酷澎今天上修數量（要確認，但不算下修）

    for line_, role_ in (("瑪氏", "today_open"), ("寶僑", "today_done"), ("CPG-潔品", "today_done"), ("瑪氏", "today_done")):
        pick(line_, T - 9, T - 4, role_, T)                                # 今天到貨的幾張（未來 7 天那張圖今天才有箱數）

    # 把 PLAN 分給各線的 PO：要記到第三階段的給早就到貨的單，只有第一階段的可以給還沒到貨的
    for grp, plans in PLAN.items():
        free = [p for p in pos if p["grp"] == grp and not p["role"]]
        order = sorted(range(len(plans)), key=lambda i: -max(int(r[0]) for r in plans[i]))
        for n_done, i in enumerate(order):
            plan = plans[i]
            top = max(int(r[0]) for r in plan); shifts = sum(1 for r in plan if "date" in r[1])
            if top == 3:
                c = [p for p in free if g_of(p) <= T - 1 - 2 * shifts and p["f"] >= 1]
            elif top == 2:
                c = [p for p in free if g_of(p) <= T + 2 and p["f"] >= 1]
            else:
                c = [p for p in free if 1 <= p["f"] <= T - 1]
            if not c:
                print("   [警告] 沒有合適的 PO 給", grp, plan); continue
            p = c[(len(c) * (n_done % 3 + 1)) // 4]
            p["plan"] = list(plan); p["role"] = "plan"; free.remove(p)
    for p in pos:
        p["off"] = [rng.randint(0, 1) for _ in p["plan"]]

    def target(p):
        """下一輪排在第幾個工作天。"""
        stage = p["plan"][0][0]; o = p["off"][len(p["off"]) - len(p["plan"])]; g = g_of(p)
        k = {"1": min(p["f"] + 1 + o, g - 4), "2": g - 3 + o, "3": g - 1 + o}[stage]
        return max(k, p["f"] + 1 if stage == "1" else p["f"], p["last_round"] + 1, 1)

    # ---------------------------------------------------------- 訂單彙總表（假的）
    def workbook(plist, day):
        wb = openpyxl.Workbook(); ws = wb.active; ws.title = "整合表"; ws.append(HDR)
        n = 0
        for p in plist:
            for r in p["rows"]:
                if r.get("gone"):
                    continue
                n += 1
                ws.append([p["type"], p["line"], p["no"], p["wh"], f"桃園市示範區物流路 {p['seq'] % 40 + 1} 號（{p['wh']} 倉）", dt.datetime.combine(p["dd"], dt.time()), n,
                           r["sku"], r["barcode"], r["yf"], r["brand"], r["name"], r["qty"], r["qty"], r["unit"], r["box"], round(r["qty"] / r["box"], 2),
                           r["price"], r["price"], "相符", "", r["price"] * r["box"], r["price"] * r["qty"], 540, "(M)-\n(E)2027-12-31", "", None, None, "YYYY/MM/DD", None, p["parent"]])
        buf = io.BytesIO(); wb.save(buf)
        return buf.getvalue(), f"Coupang_PO_Integration_{day:%Y%m%d}.xlsx"

    def import_file(c, plist, day):
        data, name = workbook(plist, day)
        pv = ok(c.post("/api/import/preview", data={"file": (io.BytesIO(data), name)}, content_type="multipart/form-data"), "import preview").get_json()
        ok(c.post("/api/import/commit", json={"batch_id": pv["batch_id"]}), "import commit")
        return data, name

    def detail(c, p):
        return c.get(f"/api/pos/{p['no']}").get_json()

    def set_status(c, p, value, field="po_status"):
        r = c.post("/api/pos/status", json={"po_numbers": [p["no"]], "field": field, "value": value})
        if r.status_code == 200:
            p["status" if field == "po_status" else "recv"] = value
        elif verbose:
            print("   （狀態沒改成）", p["no"], value, r.get_json().get("message", "")[:60])
        return r.status_code == 200

    def lower_qty_manual(c, p, n_items=1):
        d = detail(c, p)
        cand = [x for x in d["skus"] if (x["qty_ship"] or 0) > 0 and not x["removed_from_coupang"]]
        for x in rng.sample(cand, min(n_items, len(cand))):
            box = x["box_size"] or 1
            cut_boxes = max(1, int(x["qty_ship"] / box * rng.choice([0.15, 0.25, 0.3, 0.5])))
            ok(c.put(f"/api/orders/{x['id']}", json={"version": x["version"], "qty_ship": max(0, x["qty_ship"] - cut_boxes * box), "force_edit": True}), "qty_ship")

    def move_date_manual(c, p, steps=None, wh=None):
        d = detail(c, p)
        body = {"po_version": d["header"]["version"], "force_edit": True}
        if wh:
            body["warehouse"] = wh; p["wh"] = wh
        else:
            p["dd"] = WD[min(g_of(p) + (steps or rng.choice([1, 1, 2])), len(WD) - 1)]
            body["delivery_date"] = p["dd"].isoformat()
        ok(c.put(f"/api/pos/{p['no']}", json=body), "po date/wh")

    def coupang_change(p, kinds, raise_=False):
        """酷澎那邊改：動「檔案」的內容，等一下匯入才進系統。回要一起放進檔案的 PO。"""
        out = [p]
        if "split" in kinds:
            alive = [r for r in p["rows"] if not r.get("gone")]
            r = alive[-1]; r["gone"] = True
            nonlocal_no[0] += rng.randint(1, 9)
            child = {"seq": 900 + len(pos), "no": str(nonlocal_no[0]), "line": p["line"], "grp": p["grp"], "wh": p["wh"], "f": today_k[0],
                     "dd": WD[min(g_of(p) + 2, len(WD) - 1)], "rows": [dict(r, gone=False)], "status": "", "pulled": False, "plan": [], "off": [], "last_round": -9,
                     "type": "拆單", "parent": p["no"], "role": "child", "recv": "未驗收", "born": False}
            pos.append(child); out.append(child)
        elif "qty" in kinds:
            alive = [r for r in p["rows"] if not r.get("gone")]
            for r in rng.sample(alive, min(len(alive), 2 if raise_ is None else 1)):
                boxes = r["qty"] // r["box"]
                r["qty"] = (boxes + max(1, boxes // 4)) * r["box"] if raise_ else max(r["box"], (boxes - max(1, int(boxes * rng.choice([0.2, 0.3, 0.5])))) * r["box"])
        if "date" in kinds and "split" not in kinds:
            if rng.random() < 0.5:
                p["wh"] = rng.choice([w for w in WHS if w != p["wh"]])
            else:
                p["dd"] = WD[min(g_of(p) + rng.choice([1, 2]), len(WD) - 1)]
        return out
    nonlocal_no, today_k = [no + 40], [0]

    # ---------------------------------------------------------- 其他系統的假檔
    def shopee_file(prs):
        hdr = ["PR ID", "PO ID", "Warehouse", "Expected Delivery Time", "Shopee SKU ID", "Supplier SKU ID", "Shopee SKU Name", "Shopee Requested Qty (unit)", "Selling Type", "EAN / UPC"]
        wb = openpyxl.Workbook(); ws = wb.active; ws.append(hdr)
        for pr, wh, d, items in prs:
            for j, (sup, name, qty) in enumerate(items):
                ws.append([pr, None, wh, d, f"{pr[-4:]}_{j + 1}", sup, name, str(qty), "Pcs", sup.split("_")[0]])
        buf = io.BytesIO(); wb.save(buf); return buf.getvalue()
    SHP_ITEMS = [("4719900000113_CNN", "幫寶適 清新幫 拉拉褲 L 38片", 240), ("4719900000120_CNN", "好自在 液體衛生棉 日用", 180), ("4719900000137_CNN", "飛柔 去屑洗髮精 750ml", 120),
                 ("4719900000144_CNN", "潘婷 潤髮精華素 700ml", 84), ("4719900000151_CNN", "Ariel 洗衣精補充包 1100g", 150), ("4719900000168_RNN", "幫寶適 一級幫 紙尿褲 M 箱購", 26),
                 ("4719900000175_CNN", "Downy 柔軟精補充包 1520ml", 96), ("4719900000182_CNN", "歐樂B 牙刷 6入", 60)]

    def shopee_import(c, day, n_pr, serial, tweak=None):
        prs = []
        for i in range(n_pr):
            it = [SHP_ITEMS[(serial * 3 + i * 2 + j) % len(SHP_ITEMS)] for j in range(2 + (serial + i) % 2)]
            if tweak and i == 0:
                it = [(a, b, tweak(q) if j == 0 else q) for j, (a, b, q) in enumerate(it)]
            prs.append((f"PRTWCOTWA{day:%Y%m%d}{serial * 10 + i + 1:04d}", "TWA", (day + dt.timedelta(days=5 + i)).isoformat(), it))
        pv = ok(c.post("/api/shopee/import/preview", data={"file": (io.BytesIO(shopee_file(prs)), f"PurchaseOrder_{day:%Y%m%d}.xlsx")}, content_type="multipart/form-data"), "shopee preview").get_json()
        ok(c.post("/api/shopee/import/commit", json={"upload_id": pv["upload_id"], "fulfil": "竹運出貨"}), "shopee commit")

    MOMO_ITEMS = [("11000001", "【彩豆豆】牛奶巧克力 40g*12", 48, "M89297484_QMN"), ("11000002", "【口香糖王】薄荷", 200, "M81232885_CMN"), ("11000003", "【喵愛餡】貓點心 化毛 箱購", 3, "M69072565_RMN")]

    def momo_file(orders, day):
        hdr = ["項次", "倉別", "到倉日", "採購日", "入庫單號", "入庫預定日期", "採購總量", "商品編號", "商品名稱", "單品編號", "單品詳細", "採購數量", "商品原廠編號"]
        wb = openpyxl.Workbook(); ws = wb.active; ws.append(hdr)
        for k, (wh, nom, exp, items) in enumerate(orders):
            for j, (prod, nm, q, code) in enumerate(items):
                ws.append([str(k + 1) if j == 0 else "", wh if j == 0 else "", "", f"{day:%Y/%m/%d}" if j == 0 else "", nom if j == 0 else "",
                           f"{exp:%Y/%m/%d}" if j == 0 else "", str(sum(int(x[2]) for x in items)) if j == 0 else "", prod, nm, "001", "無", str(q), code])
        buf = io.BytesIO(); wb.save(buf); return buf.getvalue()

    def momo_import(c, day, n, serial):
        orders = []
        for i in range(n):
            items = [MOMO_ITEMS[(serial + i + j) % 3] for j in range(1 + (serial + i) % 2)]
            items = [(a, b, q * (1 + (serial + j) % 3), d) for j, (a, b, q, d) in enumerate(items)]
            orders.append((["DC6", "SDC", "DC1(自)"][(serial + i) % 3], f"{day:%y%m%d}{57 + serial:02d}-{i + 1:04d}", day + dt.timedelta(days=6 + i), items))
        pv = ok(c.post("/api/momo/import/preview", data={"file": [(io.BytesIO(momo_file(orders, day)), "UnsendList.xlsx")]}, content_type="multipart/form-data"), "momo preview").get_json()
        ok(c.post("/api/momo/import/commit", json={"upload_id": pv["upload_id"]}), "momo commit")
        return [o[1] for o in orders]

    momo_new, momo_eip_day, momo_po = {}, {}, [0]
    shp_days = {T - 19: 1, T - 15: 2, T - 11: 1, T - 8: 2, T - 5: 1, T - 3: 3, T - 1: 2, T: 2}
    momo_days = {T - 17: 1, T - 13: 2, T - 10: 1, T - 6: 2, T - 4: 1, T - 2: 2, T: 2}

    # ---------------------------------------------------------- 一天一天演
    n_rounds = 0
    for k in range(T + 1):
        D = WD[k]; today_k[0] = k; is_today = k == T
        tm = (lambda f, hh, mm: today_at(f)) if is_today else (lambda f, hh, mm: ck.at(D, hh, mm))      # noqa: E731

        # 今天要記的幾輪
        due_rounds = [p for p in pos if p["plan"] and target(p) <= k]
        in_file = [p for p in pos if p["f"] == k and not p["born"]]
        handled = []                                                       # 酷澎今天改、同事今天就處理掉的
        for p in due_rounds:
            if p["plan"][0][3] == "c":
                extra = coupang_change(p, p["plan"][0][1])
                in_file += [x for x in extra if x not in in_file]; handled.append(p)
        unhandled = []                                                     # 酷澎今天改、還沒人處理（今天才有）
        if is_today:
            coupang_change(live, ["qty"], raise_=None); in_file.append(live); unhandled.append(live)
            afters[1]["dd"] = WD[g_of(afters[1]) + 1]; in_file.append(afters[1]); unhandled.append(afters[1])
            coupang_change(raised, ["qty"], raise_=True); in_file.append(raised); unhandled.append(raised)

        # 早上：匯入訂單彙總表
        tm(0.04, 9, rng.randint(2, 18))
        importer_ = alice if k % 5 == 3 else zhen
        if in_file:
            last_file = import_file(importer_, in_file, D)
            for p in in_file:
                if not p["born"]:
                    p["born"] = True; p["status"] = "已建立"
        if k == 2:
            ck.add(25)
            ok(alice.post("/api/mars/products/import", data={"file": (open(os.path.join(OMS, "samples", "mars", "fake", "假_瑪氏商品總表.xlsx"), "rb"), "假_瑪氏商品總表.xlsx")},
                          content_type="multipart/form-data"), "mars products")
        if k in momo_days and not is_today:
            ck.add(14); momo_new[k] = momo_import(alice, D, momo_days[k], k)
        if k - 1 in momo_new:                                               # 匯入隔天：產 EIP 採購單（其中一次有一張改竹運出貨）
            if is_today:
                today_at(0.26)
            else:
                ck.at(D, 10, rng.randint(35, 55))
            nos = momo_new[k - 1]
            if len(nos) > 1 and (k // 2) % 2 == 0:
                ok(alice.post("/api/momo/ship_method", json={"inbound_nos": [nos[-1]], "ship_method": "竹運出貨"}), "momo ship"); nos = nos[:-1]; ck.add(3)
            ok(alice.post("/api/momo/purchase/generate", json={"inbound_nos": nos}), "momo eip"); momo_eip_day[k] = True
        if k - 1 in momo_eip_day:                                           # 再隔天：EIP 採購單號回填
            if is_today:
                today_at(0.30)
            else:
                ck.at(D, 11, rng.randint(5, 40))
            for e in (alice.get("/api/momo/eips").get_json().get("eips") or []):
                if not e["eip_po"]:
                    momo_po[0] += 1
                    ok(alice.put(f"/api/momo/eips/{e['id']}", json={"eip_po": f"PO{D:%Y%m}9{momo_po[0]:02d}"}), "momo eip_po"); ck.add(2)
        if k in shp_days and not is_today:
            ck.add(11); shopee_import(alice, D, shp_days[k], k)

        # 上午：我方手動改（今天要記那幾輪的）
        tm(0.12, 10, rng.randint(5, 30))
        for p in due_rounds:
            stage, kinds, reasons, src, note = p["plan"][0]
            if src == "m":
                c = who_of(p)
                if "qty" in kinds:
                    lower_qty_manual(c, p, rng.choice([1, 1, 2])); ck.add(rng.randint(2, 6))
                if "date" in kinds:
                    move_date_manual(c, p); ck.add(rng.randint(2, 6))
                ck.add(rng.randint(3, 12))
        if k == T - 1:                                                      # 處理完成之後又改：小真上週五再下修一項
            lower_qty_manual(zhen, afters[0], 1); ck.add(9)
        if handled and not is_today:
            ck.add(10); ok(zhen.post("/api/pos/review", json={"po_numbers": [p["no"] for p in handled] + [x["no"] for x in pos if x["parent"] in [p["no"] for p in handled]]}), "review")

        # 下午：記「這一輪處理完成」（今天的留到最後，首頁最近操作紀錄才看得到不同系統）
        if not is_today:
            ck.at(D, 13, rng.randint(20, 55))
            for p in due_rounds:
                stage, kinds, reasons, src, note = p["plan"].pop(0)
                ok(who_of(p).post(f"/api/pos/{p['no']}/rounds", json={"stage": stage, "kinds": kinds, "reasons": reasons, "note": note}), "round")
                p["last_round"] = k; n_rounds += 1; ck.add(rng.randint(6, 25))

        # 傍晚：PO 狀態、拉單、驗收
        tm(0.2, 16, rng.randint(5, 30))
        for p in [x for x in pos if x["born"]]:
            g = g_of(p); c = zhen
            if p["role"] == "cancel":
                if p["status"] == "已建立" and k >= p["f"] + 2:
                    set_status(c, p, "已取消"); ck.add(1)
                continue
            if p["status"] == "已建立" and k >= p["f"] + 1 and not (is_today and p["seq"] % 4 == 0):
                set_status(c, p, "已回覆"); ck.add(1)
            if p["status"] == "已回覆" and k >= g - 3 and k > p["f"]:
                set_status(c, p, "處理中"); ck.add(1)
            if not p["pulled"] and k >= g - 2 and p["status"] == "處理中":
                if ok(c.post("/api/pos/pull", json={"po_numbers": [p["no"]], "pulled": True}), "pull").status_code == 200:
                    p["pulled"] = True; ck.add(1)
            done_ok = p["role"] not in ("stuck", "today_open") and not p["plan"] and (
                D > p["dd"] or (D == p["dd"] and (not is_today or p["seq"] % 2 == 0 or p["role"] == "today_done")))
            if p["status"] == "處理中" and done_ok and p not in due_rounds:
                set_status(c, p, "已完成"); ck.add(1)
            if p["status"] == "已完成" and p["recv"] == "未驗收" and k >= g + 2:
                set_status(c, p, "異常" if p["seq"] % 17 == 5 else "完成", "receiving_status"); ck.add(1)

        if is_today:
            # 今天的後半段：各系統各做一點事（首頁「最近操作紀錄」才看得到不同系統）
            today_at(0.34)                                                 # 蝦皮重傳上週五那份、數量有變 → 差異待確認
            shopee_import(alice, WD[T - 1], shp_days[T - 1], T - 1, tweak=lambda q: q - 24)
            today_at(0.42)
            for p in due_rounds:
                stage, kinds, reasons, src, note = p["plan"].pop(0)
                ok(who_of(p).post(f"/api/pos/{p['no']}/rounds", json={"stage": stage, "kinds": kinds, "reasons": reasons, "note": note}), "round")
                p["last_round"] = k; n_rounds += 1; ck.add(4)
            if handled:
                ok(zhen.post("/api/pos/review", json={"po_numbers": [p["no"] for p in handled]}), "review")
            today_at(0.50); move_date_manual(alice, afters[2], wh="TAO5" if afters[2]["wh"] != "TAO5" else "TAO3")
            today_at(0.58); momo_import(alice, D, momo_days[T], T)
            today_at(0.66)
            try:                                                           # 採購表轉換（repo 裡的假通知單）
                fp = os.path.join(OMS, "samples", "purchase", "fake", "假_永豐Mars採購單(箱單位)-GUM糖_TAO3_13000000900002.xlsx")
                pr = jerry.post("/api/purchase/parse", data={"line": "mars", "file": (open(fp, "rb"), os.path.basename(fp))}, content_type="multipart/form-data")
                if pr.status_code == 200:
                    ok(jerry.post("/api/purchase/export", json={"line": "mars", "groups": pr.get_json()["groups"]}), "purchase export")
                else:
                    print("   （採購表轉換略過）", pr.status_code, pr.get_data(as_text=True)[:150])
            except Exception as e:      # noqa: BLE001
                print("   （採購表轉換略過）", e)
            today_at(0.74); set_status(zhen, live, "修改中")
            today_at(0.82); shopee_import(alice, D, shp_days[T], T)
            today_at(0.90)                                                 # 竹運拋檔：寶僑先產一個倉（下一個到貨日只有一個倉就產再下一天的，首頁才留得住「尚未產出」那一項）
            days_pg = sorted({p["dd"] for p in pos if p["line"] == "寶僑" and p["dd"] > today and p["born"] and p["status"] != "已取消"})
            if days_pg:
                whs0 = sorted({p["wh"] for p in pos if p["line"] == "寶僑" and p["dd"] == days_pg[0] and p["born"]})
                day_x = days_pg[0] if len(whs0) > 1 or len(days_pg) == 1 else days_pg[1]
                grp_x = [p for p in pos if p["line"] == "寶僑" and p["dd"] == day_x and p["born"]]
                data, name = workbook(grp_x, D)
                r = zhen.post("/api/zhuyun/export", data={"file": (io.BytesIO(data), name), "only": f"{day_x.isoformat()}|{grp_x[0]['wh']}"}, content_type="multipart/form-data")
                if r.status_code != 200:
                    print("   （竹運拋檔略過）", r.status_code, r.get_data(as_text=True)[:120])

    db._local_now = real_now
    left = [(p["no"], p["plan"]) for p in pos if p["plan"]]
    if left:
        print("   [注意] 還有沒演到的輪：", left)
    info = {"today": today, "live": live["no"], "after": [p["no"] for p in afters], "stuck": stuck["no"], "rounds": n_rounds, "pos": len(pos)}
    if verbose:
        print("seed:", info)
    return info

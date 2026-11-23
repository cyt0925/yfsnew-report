"""蝦皮特選、MOMO 的假資料（seed_portal.build 一天一天呼叫）。

改單統計（2026-11-18 版）把蝦皮特選、MOMO 也算進來，來源分三種，這裡三種都演：
- 通路修改：通路改了單，同事重新下載再傳一次 → 系統列出差異 → 按確認。
- 我方修改：改下採數量、填缺貨、改竹運出貨量、勇信少出改成不出貨、整張缺貨結案、業務在採購單上寫下採數量。
- 系統自動下修：數量不成箱，產 EIP 採購單時系統自動捨去到整箱。
全部照真的流程打 API（跟畫面上按的是同一支），時間用 seed_portal 換上去的假時鐘，不直接改資料庫。

全部是編的：單號、料號、數量、庫存、效期都是亂編。品名沿用 seed_portal 原本就有的那幾個公開商品名，
瑪氏用 repo 內建假樣本（samples/mars/fake/假_瑪氏商品總表.xlsx）裡的假品名。

寫法：_plan() 裡一列一個動作 (第幾天, 時間, 誰, 做什麼)。第幾天是相對今天的工作天（-3＝三個工作天前，0＝今天）；
今天的時間寫 0～1 的比例（seed_portal 把今天的事照比例塞在「現在」之前），其他天寫 "HH:MM"。
"""
import datetime as dt, io, os, random

import openpyxl

OMS = os.environ.get("YFS_OMS", "/home/user/yfs/coupang-oms")

# ── 商品（假料號）。蝦皮特選：寶僑是 13 碼國條、紙潔是 7 碼永豐料號；MOMO：瑪氏 M 開頭、紙品 0 開頭、潔品 1 開頭 ──
#    代號: (料號, 單位代碼, 單位, 品名, 箱入數)
PG = {"P1": ("4719900000113", "C", "包", "幫寶適 清新幫 拉拉褲 L 38片", 4), "P2": ("4719900000120", "C", "包", "好自在 液體衛生棉 日用", 12),
      "P3": ("4719900000137", "P", "瓶", "飛柔 去屑洗髮精 750ml", 12), "P4": ("4719900000144", "P", "瓶", "潘婷 潤髮精華素 700ml", 12),
      "P5": ("4719900000151", "C", "包", "Ariel 洗衣精補充包 1100g", 6), "P6": ("4719900000168", "R", "箱", "幫寶適 一級幫 紙尿褲 M 箱購", 1),
      "P7": ("4719900000175", "C", "包", "Downy 柔軟精補充包 1520ml", 6), "P8": ("4719900000182", "C", "包", "歐樂B 牙刷 6入", 4)}
PAPER = {"Z1": ("0199011", "T", "組", "春風 超細柔抽取式衛生紙 110抽 24包", 3), "Z2": ("0199012", "R", "箱", "五月花 厚棒廚房紙巾 60組 24捲", 1),
         "Z3": ("0199013", "C", "包", "可麗舒 柔拭紙巾 110抽", 72), "Z4": ("1199021", "P", "瓶", "白蘭 動力配方洗碗精 檸檬 2.8kg", 4),
         "Z5": ("1199022", "P", "瓶", "魔術靈 浴室清潔劑 噴槍瓶 500ml", 12), "Z6": ("1199023", "C", "包", "一匙靈 抗菌EX 洗衣精補充包 1.5kg", 6)}
SKU = {**PG, **PAPER}
#    MOMO 代號: (商品編號, 品名, 商品原廠編號, 保存天數)。瑪氏的箱入數在瑪氏商品總表（盒：彩豆豆 24、口香糖王包 200、喵喵鮮 24、汪汪嚴選 12、巧克棒 6）
MM = {"A": ("11000001", "【彩豆豆】牛奶巧克力 40g*12", "M89297484_QMN", 365), "B": ("11000002", "【口香糖王】薄荷", "M81232885_CMN", 540),
      "C": ("11000003", "【喵愛餡】貓點心 化毛 箱購", "M69072565_RMN", 540), "D": ("11000004", "【喵喵鮮】貓餐包 鮪魚 70g", "M80676511_QMN", 730),
      "E": ("11000005", "【汪汪嚴選】狗點心 主廚 4入", "M66238912_QMN", 730), "F": ("11000006", "【巧克棒】花生巧克力 51g*12", "M36752197_QMN", 364),
      "G": ("12000001", PAPER["Z2"][3], "0199012_RMN", 1095), "H": ("12000002", PAPER["Z1"][3], "0199011_TMN", 1095),
      "I": ("12000003", PAPER["Z4"][3], "1199021_PMN", 1095), "J": ("12000004", PAPER["Z6"][3], "1199023_CMN", 1095)}
MARS_CODE = {"A": "89297484", "B": "81232885", "C": "69072565", "D": "80676511", "E": "66238912", "F": "36752197"}

PO_HDR = ["PR ID", "PO ID", "Is Jit", "Warehouse", "PR Creation Date", "PO Creation Date", "Expected Delivery Time", "Shopee SKU ID",
          "Supplier SKU ID", "Shopee SKU Name", "Shopee Requested Qty (unit)", "Shopee Requested Qty (pcs)", "Unit Name",
          "Shopee Request Price (before-tax)", "Shopee Request Price (after-tax)", "Tax %", "Shopee Requested Value (before-tax)",
          "Shopee Requested Value (after-tax)", "Supplier Confirmed Qty (unit)", "Supplier Confirmed Qty (pcs)",
          "Supplier Confirmed Price (before-tax)", "Supplier Confirmed Price (after-tax)", "Supplier Confirmed Value (after-tax)",
          "Brand", "EAN / UPC", "EAN / UPC2", "MOQ", "Sourcing Status", "Next Available Date", "Selling Type", "Inbound ID"]       # 蝦皮後台採購單的表頭
MOMO_HDR = ["項次", "倉別", "到倉日", "採購日", "入庫單號", "入庫預定日期", "確認日期", "採購總量", "延遲訊息", "momo採購備註", "原入庫單號", "列印狀態",
            "課別", "配送溫層", "請採單號", "商品編號", "商品名稱", "單品編號", "單品詳細", "保存天數", "商品有效日期", "入庫最低有效期限", "採購數量",
            "長", "寬", "高", "重量", "商品原廠編號"]                                                                              # MOMO 未出貨清單的表頭
SHIP, BUYIN, DIRECT = "竹運出貨", "竹運採購進貨", "供應商直送"


def _xlsx(sheets):
    """[(工作表名, [列…])] → 檔案內容。"""
    wb = openpyxl.Workbook(); wb.remove(wb.active)
    for title, rows in sheets:
        ws = wb.create_sheet(title)
        for r in rows:
            ws.append(list(r))
    buf = io.BytesIO(); wb.save(buf); return buf.getvalue()


class Channels:
    def __init__(self, app, db, ck, WD, T, clients, today_at, verbose=True):
        """ck：seed_portal 的假時鐘（改 ck.t 就是改系統時間）；clients：{"alice", "zhen"} 已登入的 test client。"""
        self.app, self.db, self.ck, self.WD, self.T, self.c, self.today_at, self.verbose = app, db, ck, WD, T, clients, today_at, verbose
        self.rng = random.Random(20261118)             # 只管這裡的秒數，不動 seed_portal 的亂數（酷澎那邊的資料才不會跟著變）
        self.shp, self.mm = {}, {}                     # 通路那邊「現在的檔案內容」：{代號: 一張單}
        self.n_shp = self.n_mm = self.n_po = 0
        self.fail = 0
        self.steps = self._plan()

    # ── 時間、API ──────────────────────────────────────────────────────────
    def day(self, off):
        return self.WD[self.T + off]

    def plus(self, off, n):
        """第 off 天再過 n 個日曆天；落在週末就順延到星期一。"""
        d = self.day(off) + dt.timedelta(days=n)
        while d.weekday() >= 5:
            d += dt.timedelta(days=1)
        return d

    def after(self, d, n=1):
        """d 再過 n 個日曆天，落在週末就順延到星期一。通路「改到貨日」用：從原本那天往後推，一定跟原本不一樣
        （用 plus(off, 6) → plus(off, 7) 的寫法，原本那天是星期六、日的時候兩個都會順延到同一個星期一，等於沒改）。"""
        d += dt.timedelta(days=n)
        while d.weekday() >= 5:
            d += dt.timedelta(days=1)
        return d

    def lead_last_month(self, off, lead):
        """「上個月到貨、沒改」的那張單要等幾天到貨：照 lead，但到貨日會跨進這個月的話就縮短到還在上個月
        （首頁「本月改單」的訂單張數、改單統計每月統計的兩個月才不會因為今天是幾號而變）。下單那天已經是這個月就照 lead。"""
        first = self.day(0).replace(day=1)
        return next((n for n in range(lead, 0, -1) if self.plus(off, n) < first), lead)

    def tick(self, minutes=1):
        self.ck.t += dt.timedelta(minutes=minutes, seconds=self.rng.randint(2, 50))

    def ok(self, r, what, want=200):
        if r.status_code != want:
            self.fail += 1
            print("   [API 失敗]", what, r.status_code, (r.get_data(as_text=True) or "")[:300])
        return r

    def run(self, k, part=None):
        """跑第 k 個工作天排的動作。今天分三段叫（part＝"am"／"momo_new"／"shopee_new"），其他天一次跑完。"""
        off, today = k - self.T, k == self.T
        for o, when, who, fn, tag in self.steps:
            if o != off or (today and tag != part):
                continue
            if today:
                self.today_at(when)
            else:
                hh, mm = map(int, when.split(":"))
                D = self.WD[k]
                self.ck.t = dt.datetime(D.year, D.month, D.day, hh, mm, self.rng.randint(3, 55), tzinfo=self.db.TAIPEI_TZ)
            fn(self.c[who])

    # ── 參考資料：價格本、竹運的三份檔 ────────────────────────────────────
    def refs(self, c):
        """價格本（箱入數）、竹運商品主檔（商品年限）。瑪氏商品總表 seed_portal 會另外匯入 repo 裡那份假的。"""
        rows = lambda d: [["料號", "單位", "品名", "料號3", "箱入數", "進價"]] + [[b, u, n, b + uc, box, 100] for b, uc, u, n, box in d.values()]   # noqa: E731
        up = lambda url, data, name: self.ok(c.post(url, data={"file": (io.BytesIO(data), name)}, content_type="multipart/form-data"), name)  # noqa: E731
        up("/api/shopee/conv/import", _xlsx([("價格本整合", rows(PG))]), "假_PG價格本整合.xlsx"); self.tick(2)
        up("/api/shopee/conv/import", _xlsx([("紙品價格本", rows({k: v for k, v in PAPER.items() if v[0][0] == "0"})),
                                             ("潔品價格本", rows({k: v for k, v in PAPER.items() if v[0][0] == "1"}))]), "假_紙潔價格本整合.xlsx"); self.tick(2)
        life = [["客戶品號", "商品名稱", "國際條碼", "供應商代碼", "單位", "長", "寬", "高", "重", "箱入數", "商品年限(日)"]]
        life += [[b + uc, n, b, "DEMO", u, "", "", "", "", box, 1095] for b, uc, u, n, box in SKU.values()]
        up("/api/shopee/stock/import", _xlsx([("產品基本資料", life)]), "假_產品基本資料.xlsx")

    def stock(self, c, ec=None, lots=None):
        """今天的竹運庫存：EC 即時庫存（舊版 Excel）＋竹運庫存效期表。沒指定的品項都給很夠的量、很遠的效期。
        ec：{代號: EC 可用量}；lots：{代號: [(可出貨量, 效期 yyyymmdd)…]}。兩邊（蝦皮特選、MOMO）共用同一份。"""
        import xlwt
        ec, lots, D = ec or {}, lots or {}, self.ck.t
        wb = xlwt.Workbook(); sh = wb.add_sheet("全商品")
        for j, h in enumerate(["結餘日期", "料號", "單位", "品名", "EC可用量"]):
            sh.write(0, j, h)
        rows = [["儲區", "客戶品號", "儲位", "可出貨量", "庫存量", "效期", "製造日期"]]
        for i, (key, (base, uc, unit, name, _box)) in enumerate(SKU.items(), start=1):
            for j, v in enumerate((f"{D:%Y/%m/%d}", base, unit, name, ec.get(key, 1800))):
                sh.write(i, j, v)
            for n, (q, exp) in enumerate(lots.get(key) or [(ec.get(key, 1800), "20290630")]):
                rows.append(["良品區", base + uc, f"{'ABCDEFGH'[i % 8]}-{i:02d}-{n + 1:02d}", q, q, exp, ""])
        buf = io.BytesIO(); wb.save(buf)
        for data, name in ((buf.getvalue(), f"全商品_{D:%Y%m%d}.xls"), (_xlsx([("sheet1", rows)]), f"竹運庫存效期表_{D:%m%d}.xlsx")):
            self.ok(c.post("/api/shopee/stock/import", data={"file": (io.BytesIO(data), name)}, content_type="multipart/form-data"), name); self.tick(1)

    # ── 蝦皮特選 ───────────────────────────────────────────────────────────
    def s_new(self, key, off, fulfil, lead, items):
        """通路那邊開一張新單（還沒進系統，要 s_up 才匯入）。items：[(代號, 數量)…]。竹運出貨的單已經是 PO、有入庫單號；其他還是 PR。"""
        self.n_shp += 1
        D, n = self.day(off), self.n_shp
        po = fulfil == SHIP
        self.shp[key] = {"pr": f"PRTWCOTWA{D:%Y%m%d}{n:04d}", "po": f"POTWCTWA{D:%y%m%d}{n:02d}A" if po else None, "inb": f"INTWA000{D:%y%m%d}{n:04d}" if po else None,
                         "wh": "TWA", "date": self.plus(off, lead).isoformat(), "born": D, "fulfil": fulfil, "line": "寶僑" if items[0][0] in PG else "紙潔",
                         "items": [[f"288{n:02d}{j + 1:02d}6501_{n:02d}{j + 1:02d}", k, q] for j, (k, q) in enumerate(items)]}

    def s_no(self, key):
        return self.shp[key]["po"] or self.shp[key]["pr"]

    def s_up(self, c, keys, name=None):
        """把這幾張單現在的內容做成蝦皮採購單再傳一次（新的就是匯入，改過的就是重傳 → 系統比出差異）。"""
        rows = [PO_HDR]
        for key in keys:
            o = self.shp[key]
            for sid, k, q in o["items"]:
                base, uc, _unit, nm, _box = SKU[k]
                r = dict.fromkeys(PO_HDR)
                r.update({"PR ID": o["pr"], "PO ID": o["po"], "Is Jit": "No", "Warehouse": o["wh"], "PR Creation Date": f"{o['born']:%Y-%m-%d} 09:12",
                          "PO Creation Date": f"{o['born']:%Y-%m-%d} 15:02" if o["po"] else None, "Expected Delivery Time": o["date"], "Shopee SKU ID": sid,
                          "Supplier SKU ID": f"{base}_{uc}NN", "Shopee SKU Name": nm, "Shopee Requested Qty (unit)": str(q), "Shopee Requested Qty (pcs)": str(q),
                          "Unit Name": "Pieces", "Tax %": "5", "Brand": "NON-BRAND", "EAN / UPC": base, "MOQ": "1", "Sourcing Status": "Available",
                          "Selling Type": "Pcs", "Inbound ID": o["inb"]})
                rows.append([r[h] for h in PO_HDR])
        name = name or f"PurchaseOrder_{self.ck.t:%Y%m%d}.xlsx"
        pv = self.ok(c.post("/api/shopee/import/preview", data={"file": (io.BytesIO(_xlsx([("Sheet1", rows)])), name)}, content_type="multipart/form-data"), "shopee preview").get_json()
        self.tick(1)
        self.ok(c.post("/api/shopee/import/commit", json={"upload_id": pv["upload_id"], "fulfils": {self.shp[k]["line"]: self.shp[k]["fulfil"] for k in keys}}), "shopee commit")
        return pv

    def s_qty(self, key, code, qty):
        """蝦皮改數量（qty＝None 就是整個品項拿掉）。只改檔案內容，要 s_up 才進系統。"""
        o = self.shp[key]
        o["items"] = [[sid, k, qty if k == code else q] for sid, k, q in o["items"] if not (k == code and qty is None)]

    def s_confirm(self, c, *keys):
        self.ok(c.post("/api/shopee/diffs/confirm", json={"order_nos": [self.s_no(k) for k in keys]}), "shopee confirm")

    def s_item(self, c, url, key, code):
        """從畫面那支 API 找出某張單某一品（要它的 order_id）。"""
        sup = f"{SKU[code][0]}_{SKU[code][1]}NN"
        for g in c.get(url).get_json()["orders"]:
            if g["order_no"] == self.s_no(key):
                return next(x for x in g["items"] if x["supplier_sku_id"] == sup)
        raise KeyError((url, key, code))

    def s_adjust(self, c, key, code, qty, reason):
        """改下採數量（待產 EIP 採購單那一格）。"""
        x = self.s_item(c, f"/api/shopee/purchase/plan?fulfil={self.shp[key]['fulfil']}", key, code)
        self.ok(c.post("/api/shopee/purchase/adjust", json={"order_id": x["order_id"], "qty": qty, "reason": reason}), f"shopee adjust {key} {code}")

    def s_eip(self, c, *keys):
        """產出 EIP 採購單（數量不成箱的，系統在這裡自動下修）。"""
        for f in sorted({self.shp[k]["fulfil"] for k in keys}):
            self.ok(c.post("/api/shopee/purchase/generate", json={"fulfil": f, "order_nos": [self.s_no(k) for k in keys if self.shp[k]["fulfil"] == f]}), f"shopee eip {keys}")

    def s_eip_po(self, c):
        """EIP 給的採購單號填回來（還沒填的都填）。"""
        for e in sorted(c.get("/api/shopee/eips").get_json()["eips"], key=lambda e: e["id"]):
            if not e["eip_po"]:
                self.n_po += 1
                self.ok(c.put(f"/api/shopee/eips/{e['id']}", json={"eip_po": f"PO{self.ck.t:%Y%m}8{self.n_po:02d}"}), "shopee eip_po"); self.tick(2)

    def s_short(self, c, key, cuts, notify=True):
        """填缺貨：cuts＝[(代號, 缺多少, [原因…], 備註)…]，同一張單一次填完（同一秒 → 改單統計算一次）。"""
        for code, short, reasons, note in cuts:
            x = self.s_item(c, "/api/shopee/short/plan", key, code)
            self.ok(c.post("/api/shopee/short/save", json={"order_id": x["order_id"], "short": short, "reasons": reasons, "note": note}), f"shopee short {key} {code}")
        if notify:
            self.tick(4); self.s_notify(c, key)

    def s_notify(self, c, *keys):
        r = c.post("/api/shopee/short/notify", json={"order_nos": [self.s_no(k) for k in keys]})
        if r.status_code != 200 and self.verbose:
            print("   （缺貨通知略過）", keys, (r.get_json() or {}).get("error"))

    def s_ship_qty(self, c, key, code, qty, reason):
        """改竹運出貨量（待產拋單檔那一格）；qty＝0 用「改成 0（刪單）」那顆。"""
        x = self.s_item(c, "/api/shopee/ship/plan", key, code)
        if qty == 0:
            self.ok(c.post("/api/shopee/ship/zero", json={"order_ids": [x["order_id"]], "reason": reason}), f"shopee ship zero {key} {code}")
        else:
            self.ok(c.post("/api/shopee/ship/adjust", json={"order_id": x["order_id"], "qty": qty, "reason": reason}), f"shopee ship adjust {key} {code}")

    def s_ship(self, c, *keys):
        """產出竹運拋單檔；有缺的順便通知蝦皮。"""
        self.ok(c.post("/api/shopee/ship/generate", json={"order_nos": [self.s_no(k) for k in keys]}), f"shopee ship {keys}")
        self.tick(6)
        r = c.post("/api/shopee/short/notify", json={"order_nos": [self.s_no(k) for k in keys]})      # 沒有缺貨會回 400，正常
        assert r.status_code in (200, 400), r.get_data(as_text=True)[:200]

    # ── MOMO ───────────────────────────────────────────────────────────────
    def m_new(self, key, off, wh, lead, items):
        """MOMO 那邊開一張入庫單。items：[(代號, 數量)] 或 (代號, 數量, 業務寫的下採數量)。同一天的單流水號接著編。"""
        D = self.day(off)
        seq = sum(1 for o in self.mm.values() if o["born"] == D) + 1
        self.mm[key] = {"no": f"{D:%y%m%d}{57 + (self.T + off):02d}-{seq:04d}", "wh": wh, "date": self.plus(off, lead), "born": D,
                        "items": [list(i) + [None] * (3 - len(i)) for i in items]}

    def m_no(self, key):
        return self.mm[key]["no"]

    def m_up(self, c, keys, name="UnsendList.xlsx"):
        hdr = MOMO_HDR + (["下採數量"] if any(i[2] is not None for k in keys for i in self.mm[k]["items"]) else [])     # 業務在採購單加的那一欄
        rows = [hdr]
        for n, key in enumerate(keys, start=1):
            o = self.mm[key]
            for j, (k, q, buy) in enumerate(o["items"]):
                prod, nm, code, days = MM[k]
                r = dict.fromkeys(hdr, "")
                if j == 0:
                    r.update({"項次": str(n), "倉別": o["wh"], "採購日": f"{o['born']:%Y/%m/%d}", "入庫單號": o["no"], "入庫預定日期": f"{o['date']:%Y/%m/%d}",
                              "採購總量": str(sum(i[1] for i in o["items"])), "原入庫單號": o["no"], "列印狀態": "未列印", "配送溫層": "常溫"})
                r.update({"商品編號": prod, "商品名稱": nm, "單品編號": "001", "單品詳細": "無", "保存天數": str(days),
                          "入庫最低有效期限": f"{o['date'] + dt.timedelta(days=days // 3):%Y/%m/%d}", "採購數量": str(q), "商品原廠編號": code})
                if buy is not None:
                    r["下採數量"] = str(buy)
                rows.append([r[h] for h in hdr])
        pv = self.ok(c.post("/api/momo/import/preview", data={"file": [(io.BytesIO(_xlsx([("Sheet1", rows)])), name)]}, content_type="multipart/form-data"), "momo preview").get_json()
        self.tick(1)
        self.ok(c.post("/api/momo/import/commit", json={"upload_id": pv["upload_id"]}), "momo commit")
        return pv

    def m_qty(self, key, code, qty):
        """MOMO 改數量。業務那一欄原本跟 MOMO 數量一樣的（沒有要少下），跟著改。"""
        for i in self.mm[key]["items"]:
            if i[0] == code:
                i[2] = qty if i[2] == i[1] else i[2]
                i[1] = qty

    def m_confirm(self, c, *keys):
        self.ok(c.post("/api/momo/diffs/confirm", json={"inbound_nos": [self.m_no(k) for k in keys]}), "momo confirm")

    def m_item(self, c, url, key, code):
        for g in c.get(url).get_json()["orders"]:
            if g["inbound_no"] == self.m_no(key):
                return next(x for x in g["items"] if (x.get("factory_code") or "") == MM[code][2] or (x.get("product_no") or "") == MM[code][0])
        raise KeyError((url, key, code))

    def m_adjust(self, c, key, code, qty, reason):
        x = self.m_item(c, "/api/momo/purchase/plan", key, code)
        self.ok(c.post("/api/momo/purchase/adjust", json={"order_id": x["order_id"], "qty": qty, "reason": reason}), f"momo adjust {key} {code}")

    def m_eip(self, c, *keys):
        self.ok(c.post("/api/momo/purchase/generate", json={"inbound_nos": [self.m_no(k) for k in keys]}), f"momo eip {keys}")

    def m_eip_po(self, c):
        for e in sorted(c.get("/api/momo/eips").get_json().get("eips") or [], key=lambda e: e["id"]):
            if not e["eip_po"]:
                self.n_po += 1
                self.ok(c.put(f"/api/momo/eips/{e['id']}", json={"eip_po": f"PO{self.ck.t:%Y%m}9{self.n_po:02d}"}), "momo eip_po"); self.tick(2)

    def m_zhuyun(self, c, *keys):
        """整張單改成竹運出貨（竹運倉有現貨，不跟原廠買）。"""
        self.ok(c.post("/api/momo/ship_method", json={"inbound_nos": [self.m_no(k) for k in keys], "ship_method": "竹運出貨"}), f"momo ship_method {keys}")

    def m_ship_qty(self, c, key, code, qty, reason):
        x = self.m_item(c, "/api/momo/ship/plan", key, code)
        self.ok(c.post("/api/momo/ship/adjust", json={"order_id": x["order_id"], "qty": qty, "reasons": [reason]}), f"momo ship adjust {key} {code}")

    def m_ship(self, c, *keys):
        self.ok(c.post("/api/momo/ship/generate", json={"inbound_nos": [self.m_no(k) for k in keys]}), f"momo ship {keys}")

    def m_yx(self, c, key, got):
        """勇信配送明細表（假的 PDF）：這張單每一品實際出幾箱。got：{代號: 箱數}，沒寫的照訂的出。回這張單核對的結果。"""
        import pymupdf
        items = [x for g in c.get(f"/api/momo/check?no={self.m_no(key)}").get_json()["orders"] for x in g["items"] if x.get("eip_po")]
        code_of = {v: k for k, v in MARS_CODE.items()}
        doc = pymupdf.open()
        for po in sorted({x["eip_po"] for x in items}):
            lines = ["桃園市觀音區", "BMS100230-示範商店-momo", "出貨廠商名稱：A5888-示範瑪氏供應商（假資料）", f"指送日期：{self.mm[key]['date'] - dt.timedelta(days=1):%Y/%m/%d}",
                     "配 送 明 細 表(預排鮮度)", "產品編號", "產品名稱", "入數", "配送數量", f"收貨單號：{po}-momo-{self.mm[key]['wh']}"]
            n = tot = 0
            for x in items:
                if x["eip_po"] != po:
                    continue
                q = got.get(code_of[x["mars_code"]], x["ordered"])
                if q:
                    n += 1; tot += q
                    lines += [f"58880{x['mars_code']}", str(n), f"假品名 {x['mars_code']} 1:12:1", f"{q}C  ", "625D1TAP01", "2028/06/30"]
            lines += ["備註:momo嘜頭+入倉單", "單據金額:", f"合計箱數:{tot}", "客戶簽章:"]
            page = doc.new_page(); y = 40
            for ln in lines:
                page.insert_text((40, y), ln, fontname="china-t", fontsize=9); y += 14
        name = f"勇信配送明細表_{self.ck.t:%m%d}.pdf"
        self.ok(c.post("/api/momo/yx", data={"file": [(io.BytesIO(doc.tobytes()), name)]}, content_type="multipart/form-data"), "momo yx")
        return {code_of.get(x["mars_code"]): x for g in c.get(f"/api/momo/check?no={self.m_no(key)}").get_json()["orders"] for x in g["items"]}

    def m_noship(self, c, key, code):
        """勇信少出的那一品，人決定整品不出貨。"""
        x = next(x for g in c.get(f"/api/momo/check?no={self.m_no(key)}").get_json()["orders"] for x in g["items"] if x["factory_code"] == MM[code][2])
        self.ok(c.post("/api/momo/check", json={"order_id": x["order_id"], "ship": 0, "reason": "勇信少出，這次不出"}), f"momo noship {key} {code}")

    def m_close(self, c, key):
        """勇信表上沒有這張單：整張缺貨結案。"""
        self.ok(c.post("/api/momo/check/close", json={"inbound_no": self.m_no(key)}), f"momo close {key}")

    # ── 劇本 ───────────────────────────────────────────────────────────────
    def _plan(self):
        S, M = [], []          # (第幾天, 時間, 誰, 做什麼[, 今天的哪一段])

        def seq(*fns):
            """同一個人接著做好幾件事，中間隔幾分鐘。"""
            def go(c):
                for i, f in enumerate(fns):
                    if i:
                        self.tick(self.rng.randint(3, 9))
                    f(c)
            return go
        new, up, qty = self.s_new, self.s_up, self.s_qty

        # ---------------- 蝦皮特選：15 張十一月到貨的單（加一張十月的），改單 17 次（蝦皮修改 5、我方修改 8、系統自動下修 4）----------------
        new("SA", -19, SHIP, self.lead_last_month(-19, 6), [("P1", 120), ("P3", 60)])    # 十月到貨那張，沒改
        S += [(-19, "09:40", "alice", lambda c: up(c, ["SA"])), (-19, "10:05", "alice", self.refs),
              (-18, "10:20", "zhen", seq(self.stock, lambda c: self.s_ship(c, "SA")))]
        new("S1", -15, SHIP, 5, [("P1", 240), ("P3", 120), ("P8", 20)])                  # 竹運出貨；歐樂B 竹運倉只剩 8 個（少於 12 件蝦皮拒收）→ 人改成 0
        new("S2", -15, DIRECT, 6, [("Z1", 100), ("Z4", 96), ("Z6", 150)])                # 紙潔直送；春風 100 組、3 組一箱 → 系統下修 99；之後白蘭缺貨
        S += [(-15, "09:35", "alice", seq(lambda c: up(c, ["S1"]), lambda c: up(c, ["S2"], f"PurchaseOrder_{self.day(-15):%Y%m%d}(1).xlsx"))),
              (-14, "09:50", "alice", lambda c: self.s_eip(c, "S2")),
              (-14, "10:30", "zhen", seq(lambda c: self.stock(c, ec={"P8": 8}), lambda c: self.s_ship_qty(c, "S1", "P8", 0, "低於 12 件會被拒收"), lambda c: self.s_ship(c, "S1"))),
              (-13, "11:10", "alice", self.s_eip_po),
              (-12, "14:20", "alice", lambda c: self.s_short(c, "S2", [("Z4", 24, ["庫存不足"], "原廠通知缺貨")]))]
        new("S3", -11, SHIP, 5, [("P2", 180), ("P4", 84), ("P7", 96)])                   # 隔天蝦皮把好自在 180 改成 144
        new("C1", -11, DIRECT, 7, [("Z2", 30), ("Z5", 60)])                              # 沒改的
        S += [(-11, "09:45", "alice", seq(lambda c: up(c, ["S3"]), lambda c: up(c, ["C1"], f"PurchaseOrder_{self.day(-11):%Y%m%d}(1).xlsx"))),
              (-10, "09:30", "alice", seq(lambda c: (qty("S3", "P2", 144), up(c, ["S3"])), lambda c: self.s_eip(c, "C1"))),
              (-10, "10:40", "zhen", lambda c: self.s_confirm(c, "S3")),
              (-9, "10:15", "zhen", seq(self.stock, lambda c: self.s_ship(c, "S3"))),
              (-9, "11:20", "alice", self.s_eip_po)]
        new("S4", -8, DIRECT, 6, [("P1", 96), ("P5", 195), ("P3", 60)])                  # 寶僑直送：蝦皮上修、我方改下採、系統自動下修、效期不足，都在這張
        new("S5", -8, SHIP, 7, [("P6", 26), ("P7", 96)])                                 # 蝦皮改到貨日
        S += [(-8, "09:40", "alice", seq(lambda c: up(c, ["S4"]), lambda c: up(c, ["S5"], f"PurchaseOrder_{self.day(-8):%Y%m%d}(1).xlsx"))),
              (-7, "09:25", "alice", lambda c: (qty("S4", "P3", 84), up(c, ["S4"]))),
              (-7, "09:50", "alice", lambda c: (self.shp["S5"].update(date=self.plus(-8, 10).isoformat()), up(c, ["S5"], f"PurchaseOrder_{self.day(-7):%Y%m%d}(1).xlsx"))),
              (-7, "10:35", "zhen", lambda c: self.s_confirm(c, "S4", "S5")),
              (-6, "10:10", "alice", seq(lambda c: self.s_adjust(c, "S4", "P1", 48, "原廠配額不足，先下一半"), lambda c: self.s_eip(c, "S4"))),
              (-5, "11:05", "alice", seq(self.s_eip_po, lambda c: self.s_short(c, "S4", [("P3", 24, ["效期不足"], "原廠這批效期太近")])))]
        new("S6", -5, DIRECT, 6, [("Z3", 200), ("Z4", 48), ("Z6", 144)])                 # 紙潔直送：改下採、系統自動下修、兩品缺貨
        new("C2", -5, SHIP, 5, [("P1", 120), ("P3", 60)])                                # 沒改的
        S += [(-5, "09:40", "alice", seq(lambda c: up(c, ["S6"]), lambda c: up(c, ["C2"], f"PurchaseOrder_{self.day(-5):%Y%m%d}(1).xlsx"))),
              (-4, "09:55", "alice", seq(lambda c: self.s_adjust(c, "S6", "Z6", 72, "檔期結束，業務通知減量"), lambda c: self.s_eip(c, "S6"))),
              (-4, "10:30", "zhen", seq(lambda c: self.stock(c, lots={"Z1": [(30, "20271215"), (60, "20280630")]}, ec={"Z1": 100, "Z2": 60}), lambda c: self.s_ship(c, "S5", "C2"))),
              (-3, "11:15", "alice", self.s_eip_po),
              (-2, "14:10", "alice", lambda c: self.s_short(c, "S6", [("Z4", 12, ["庫存不足"], "原廠缺貨"), ("Z3", 128, ["效期不足"], "到貨效期不到允收，只出 1 箱")]))]
        new("S7", -3, SHIP, 5, [("P2", 120), ("P5", 150), ("P8", 24)])                   # 蝦皮取消一品、另一品下修
        new("S8", -3, SHIP, 6, [("P3", 120), ("P4", 84)])                                # 竹運倉盤點少一箱 → 人改出貨量
        new("S9", -3, DIRECT, 7, [("Z1", 99), ("Z2", 20)])                               # 沒改的
        S += [(-3, "09:35", "alice", seq(lambda c: up(c, ["S7", "S8"]), lambda c: up(c, ["S9"], f"PurchaseOrder_{self.day(-3):%Y%m%d}(1).xlsx"))),
              (-2, "09:30", "alice", seq(lambda c: (qty("S7", "P8", None), qty("S7", "P5", 120), up(c, ["S7"])), lambda c: self.s_eip(c, "S9"))),
              (-2, "10:20", "zhen", seq(lambda c: self.s_confirm(c, "S7"), self.stock, lambda c: self.s_ship_qty(c, "S8", "P4", 72, "竹運倉盤點少 1 箱"),
                                        lambda c: self.s_ship(c, "S7", "S8"))),
              (-1, "11:00", "alice", self.s_eip_po)]
        new("S10", -1, DIRECT, 5, [("Z5", 100), ("Z6", 90)])                             # 魔術靈 100 瓶、12 瓶一箱 → 系統下修 96；今天填缺貨
        new("S11", -1, SHIP, 7, [("P1", 240), ("P7", 96)])                               # 今天蝦皮改數量，還沒人確認（首頁今日事項那一筆）
        S += [(-1, "09:40", "alice", seq(lambda c: up(c, ["S11"]), lambda c: up(c, ["S10"], f"PurchaseOrder_{self.day(-1):%Y%m%d}(1).xlsx"))),
              (-1, "15:10", "alice", lambda c: self.s_eip(c, "S10")),
              (0, 0.31, "alice", lambda c: (qty("S11", "P7", 72), up(c, ["S11"], f"PurchaseOrder_{self.day(-1):%Y%m%d}(2).xlsx")), "am"),
              (0, 0.35, "alice", self.s_eip_po, "am"),
              (0, 0.38, "alice", lambda c: self.s_short(c, "S10", [("Z6", 30, ["庫存不足"], "原廠缺貨")], notify=False), "am")]
        new("S12", 0, SHIP, 5, [("P2", 180), ("P6", 20), ("P3", 96)])                    # 今天新進的兩張（同一個檔，兩個線別各選履約方式）
        new("S13", 0, DIRECT, 7, [("Z2", 24), ("Z4", 48)])
        S += [(0, 0.82, "alice", lambda c: up(c, ["S12", "S13"]), "shopee_new")]

        # ---------------- MOMO：14 張十一月到貨的單（加一張十月的），改單 16 次（MOMO 修改 4、我方修改 8、系統自動下修 4）----------------
        mn, mu, mq = self.m_new, self.m_up, self.m_qty
        mn("M0", -18, "DC6", self.lead_last_month(-18, 5), [("A", 48), ("C", 3)])        # 十月到貨那張，沒改
        M += [(-18, "09:50", "alice", lambda c: mu(c, ["M0"])), (-17, "10:45", "alice", lambda c: self.m_eip(c, "M0")), (-16, "11:20", "alice", self.m_eip_po)]
        mn("M1", -16, "SDC", 6, [("A", 60), ("E", 36)])                                  # 彩豆豆 60 盒、24 盒一箱 → 系統捨去成 48
        mn("C1", -16, "DC1(自)", 7, [("C", 4), ("D", 48)])                               # 沒改的
        M += [(-16, "09:35", "alice", lambda c: mu(c, ["M1", "C1"])), (-15, "10:40", "alice", lambda c: self.m_eip(c, "M1", "C1")), (-14, "11:25", "alice", self.m_eip_po)]
        mn("M2", -13, "DC6", 6, [("B", 500), ("F", 24)])                                 # 隔天 MOMO 把巧克棒 24 盒改成 36 盒；口香糖 500 包、200 包一箱 → 系統捨去成 400
        mn("M3", -13, "SDC", 7, [("G", 30, 24), ("H", 60, 60)])                          # 紙品；業務在採購單上把五月花下採寫成 24
        M += [(-13, "09:55", "alice", lambda c: mu(c, ["M2", "M3"])),
              (-12, "09:40", "alice", lambda c: (mq("M2", "F", 36), mu(c, ["M2"], "UnsendList(1).xlsx"))),
              (-12, "10:25", "zhen", lambda c: self.m_confirm(c, "M2")),
              (-12, "10:50", "alice", lambda c: self.m_eip(c, "M2", "M3")), (-11, "11:30", "alice", self.m_eip_po)]
        mn("M4", -10, "DC6", 6, [("A", 72), ("D", 60), ("E", 48)])                       # MOMO 上修又改到貨日、我方改下採、系統捨去、勇信少出改成不出貨
        mn("C2", -10, "DC1(自)", 7, [("I", 48), ("J", 60)])                              # 潔品，沒改的
        M += [(-10, "09:50", "alice", lambda c: mu(c, ["M4", "C2"])),
              (-9, "09:35", "alice", lambda c: (mq("M4", "A", 96), self.mm["M4"].update(date=self.after(self.mm["M4"]["date"])), mu(c, ["M4"], "UnsendList(1).xlsx"))),
              (-9, "10:20", "zhen", lambda c: self.m_confirm(c, "M4")),
              (-9, "10:45", "alice", seq(lambda c: self.m_adjust(c, "M4", "E", 24, "原廠通知缺貨，先下 2 箱"), lambda c: self.m_eip(c, "M4", "C2"))),
              (-8, "11:20", "alice", self.m_eip_po),
              (-6, "14:30", "alice", seq(lambda c: self.m_yx(c, "M4", {"E": 1}), lambda c: self.m_noship(c, "M4", "E")))]
        mn("M5", -6, "SDC", 6, [("D", 100), ("C", 5)])                                   # MOMO 改到貨日；貓餐包 100 盒、24 盒一箱 → 系統捨去成 96
        mn("M6", -6, "DC6", 7, [("G", 40), ("H", 90)])                                   # 紙品改竹運出貨；人改兩品的出貨量（庫存不足、效期不足）
        M += [(-6, "09:45", "alice", lambda c: mu(c, ["M5", "M6"])),
              (-5, "09:30", "alice", lambda c: (self.mm["M5"].update(date=self.after(self.mm["M5"]["date"])), mu(c, ["M5"], "UnsendList(1).xlsx"))),
              (-5, "10:15", "zhen", seq(lambda c: self.m_confirm(c, "M5"), lambda c: self.m_zhuyun(c, "M6"))),
              (-5, "10:50", "alice", lambda c: self.m_eip(c, "M5")),
              (-4, "11:10", "zhen", seq(lambda c: self.m_ship_qty(c, "M6", "G", 36, "庫存不足"), lambda c: self.m_ship_qty(c, "M6", "H", 60, "效期不足"), lambda c: self.m_ship(c, "M6"))),
              (-4, "11:40", "alice", self.m_eip_po)]
        mn("M7", -4, "DC1(自)", 6, [("E", 36), ("A", 48)])                               # 沒改的
        mn("M8", -4, "SDC", 7, [("C", 2)])                                               # 勇信表上沒有這張 → 整張缺貨結案
        M += [(-4, "09:50", "alice", lambda c: mu(c, ["M7", "M8"])), (-3, "10:40", "alice", lambda c: self.m_eip(c, "M7", "M8")), (-2, "11:35", "alice", self.m_eip_po),
              (-1, "14:40", "alice", lambda c: self.m_close(c, "M8"))]
        mn("M9", -2, "DC6", 5, [("G", 50, 40), ("H", 30, 30)])                           # 紙品；業務下採 40；隔天 MOMO 把春風 30 改成 24
        mn("M10", -2, "SDC", 6, [("A", 48), ("B", 400), ("F", 12)])                      # 巧克棒是贈品 → 改成 0 不下採
        M += [(-2, "09:40", "alice", lambda c: mu(c, ["M9", "M10"])),
              (-1, "09:45", "alice", lambda c: (mq("M9", "H", 24), mu(c, ["M9"], "UnsendList(1).xlsx"))),
              (-1, "10:20", "zhen", lambda c: self.m_confirm(c, "M9")),
              (-1, "10:45", "alice", seq(lambda c: self.m_adjust(c, "M10", "F", 0, "贈品，不下採"), lambda c: self.m_eip(c, "M9", "M10"))),
              (0, 0.27, "alice", self.m_eip_po, "am")]
        mn("M11", 0, "DC6", 6, [("A", 72), ("E", 24)])                                   # 今天新進的兩張
        mn("M12", 0, "DC1(自)", 7, [("I", 96), ("J", 60)])
        M += [(0, 0.58, "alice", lambda c: mu(c, ["M11", "M12"]), "momo_new")]

        steps = [tuple(x) + (None,) * (5 - len(x)) for x in S + M]
        return sorted(steps, key=lambda x: (x[0], x[1] if isinstance(x[1], str) else f"{x[1]:.3f}"))

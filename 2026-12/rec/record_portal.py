"""四段錄影的操作本體（rec_portal.py 灌完資料之後呼叫 run）：portal、stats、guide、survey。
每個記號另外拍一張圖到 rec/dbg/（不進錄影）；想放別的地方設環境變數 REC_DBG。"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
DBG = os.environ.get("REC_DBG") or os.path.join(HERE, "dbg"); os.makedirs(DBG, exist_ok=True)
EDGE = (263, 430)          # 內容區左邊的留白：游標放這裡滾輪捲的是整頁（放在表格上會變成捲表格自己）


class R:
    """包一層：捲動、開新的一段、除錯截圖。"""
    def __init__(self, s):
        self.s, self.pg = s, s.pg

    def begin(self, url, wait_sel, settle=900):
        """開始新的一段：換頁之後，把上一頁殘留的事件丟掉，從這一頁的第一個 Meta 事件算起。"""
        s, pg = self.s, self.pg
        s.events.clear()
        pg.goto(s.base + url); pg.wait_for_selector(wait_sel, timeout=20000); pg.wait_for_timeout(settle)
        i = next(k for k, e in enumerate(s.events) if e["type"] == 4)
        del s.events[:i]

    def go(self, url, wait_sel, timeout=15000):
        """同一段裡換頁。換完輕輕捲 2px 再捲回來：錄到一筆「捲到最上面」，重播用跳的（seek）跨頁時才不會沿用上一頁的捲動位置。"""
        pg = self.pg
        pg.goto(self.s.base + url); pg.wait_for_selector(wait_sel, timeout=timeout)
        pg.mouse.wheel(0, 2); pg.wait_for_timeout(130); pg.mouse.wheel(0, -2); pg.wait_for_timeout(130)

    def wheel(self, dy, step=34, pause=36, dx=False):
        n = max(1, int(abs(dy) / step)); sign = 1 if dy > 0 else -1
        for _ in range(n):
            self.pg.mouse.wheel(sign * step if dx else 0, 0 if dx else sign * step); self.pg.wait_for_timeout(pause)
        rest = abs(dy) - n * step
        if rest > 1:
            self.pg.mouse.wheel(sign * rest if dx else 0, 0 if dx else sign * rest)
        self.pg.wait_for_timeout(350)

    def scroll_to(self, sel, top=90, hover=(900, 420)):
        """用滾輪把某個元素捲到離視窗上緣 top 的地方（游標先放在會捲的那一塊上）。"""
        pg = self.pg
        pg.mouse.move(hover[0], hover[1], steps=14); pg.wait_for_timeout(150)
        for _ in range(4):
            y = pg.evaluate("s => document.querySelector(s).getBoundingClientRect().top", sel)
            if abs(y - top) < 6:
                break
            before = y
            self.wheel(y - top)
            if abs(pg.evaluate("s => document.querySelector(s).getBoundingClientRect().top", sel) - before) < 2:
                break                                                      # 捲到底了

    def mark(self, id, focus=None, wait=550, **kw):
        """記號。focus 裡每個元素那一刻在畫面上的位置順便印出來（整個在畫面外的會警告）。kw：想另外帶給簡報的備用選擇器。"""
        self.pg.wait_for_timeout(wait)
        self.s.mark(id, focus=focus or [], **kw)
        self.s.shot(os.path.join(DBG, id + ".png"))
        for sel in focus or []:
            b = self.pg.evaluate("s => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); return [r.left, r.top, r.right, r.bottom].map(Math.round); }", sel)
            if not b or b[3] <= 0 or b[1] >= 810:
                print(f"  [警告] mark {id} 的 focus 不在畫面上：{sel} {b}")
            elif os.environ.get("REC_BOX"):
                print(f"     {id:<16} {b}  {sel}")


def rec_portal(r, info):
    s, pg = r.s, r.pg
    r.begin("/", "#chs .ch", settle=300)
    pg.wait_for_selector("#c-line svg"); pg.wait_for_selector("#c-bar svg"); pg.wait_for_selector("#log tbody tr"); pg.wait_for_timeout(900)
    pg.mouse.move(760, 300, steps=10)
    r.mark("p_start", focus=[".content > .head"])
    s.move_to("#tasks .task", nth=0); pg.wait_for_timeout(350)
    s.move_to("#tasks .task", nth=2); pg.wait_for_timeout(250)
    r.mark("p_today", focus=["section[aria-labelledby='h-tasks']"])
    r.scroll_to("#h-ch", top=78)
    s.move_to("#ch-coupang .stats"); pg.wait_for_timeout(300)
    s.move_to("#ch-shopee .stats"); s.move_to("#ch-momo .stats")
    r.mark("p_channels", focus=["#chs"])
    r.scroll_to("#h-trend", top=78)
    r.mark("p_charts", focus=[".charts > .card:nth-child(1)", ".charts > .card:nth-child(2)"])
    # 在兩張圖上滑一下，提示框會跟著出來
    box = pg.locator("#c-line svg").bounding_box()
    pg.mouse.move(box["x"] + box["width"] * .30, box["y"] + box["height"] * .5, steps=18)
    pg.mouse.move(box["x"] + box["width"] * .78, box["y"] + box["height"] * .45, steps=45); pg.wait_for_timeout(500)
    box = pg.locator("#c-bar svg").bounding_box()
    pg.mouse.move(box["x"] + box["width"] * .28, box["y"] + box["height"] * .5, steps=22)
    # 停在三個通路都有出貨的那一天（提示框三個通路各一列，停在都是 0 的週末沒東西看）
    chs = [c["ship_7d"] for c in s.tc.get("/api/portal/summary").get_json()["channels"] if c.get("ship_7d")]
    best = max(range(pg.locator("#c-bar .hb").count()), key=lambda i: (sum(1 for c in chs if c[i]["value"] > 0), -abs(i - 4)))
    hb = pg.locator("#c-bar .hb").nth(best).bounding_box()
    pg.mouse.move(hb["x"] + hb["width"] * .5, box["y"] + box["height"] * .5, steps=30); pg.wait_for_timeout(500)
    assert pg.locator("#c-bar .tip").is_visible(), "未來 7 天那張圖的提示框沒出來"
    r.mark("p_charts_tip", focus=[".charts > .card:nth-child(2)"])
    r.scroll_to(".content > .bottom", top=80)
    assert pg.locator("#cost .cr").count() == 1 and pg.locator("#cost-ch .cr").count() == 2, "本月改單應該是三個通路各一列"
    s.move_to("#cost .cr .v"); pg.wait_for_timeout(250)                      # 本月改單：酷澎、蝦皮特選、MOMO 各一列，游標一列一列帶過
    s.move_to("#cost-ch .cr .v", nth=0); pg.wait_for_timeout(250); s.move_to("#cost-ch .cr .v", nth=1); pg.wait_for_timeout(250)
    s.move_to("#log tbody tr", nth=1)
    r.mark("p_bottom", focus=["section[aria-labelledby='h-cost']", "section[aria-labelledby='h-log']"])
    s.move_to("#nav a[href='/portal/stats']"); pg.wait_for_timeout(300)
    r.mark("p_go_stats", focus=["#nav a[href='/portal/stats']"])
    pg.wait_for_timeout(700)
    return s.save("portal")


def rec_stats(r, info):
    s, pg = r.s, r.pg
    po = info["live"]
    row = f"#tbody tr:has(button[data-open='{po}'])"
    r.begin("/coupang", "#tbody tr", settle=1200)
    pg.mouse.move(700, 360, steps=10)
    r.scroll_to("#stat-due-card", top=78, hover=(420, 300))          # 游標放在篩選區上捲整頁（放在清單上會變成捲清單自己）
    s.move_to(f"button[data-open='{po}']"); pg.wait_for_timeout(300)
    r.mark("r_list", focus=[row])
    s.click(f"button[data-open='{po}']")
    pg.wait_for_selector("#dlg-po[open]", timeout=15000); pg.wait_for_selector("#po-rounds #rd-ok", timeout=10000); pg.wait_for_timeout(800)
    s.shot(os.path.join(DBG, "r_open_top.png"))
    # 視窗裡往下捲到修改紀錄
    bb = pg.locator("#dlg-po").bounding_box()
    r.scroll_to("#po-rounds", top=bb["y"] + 150, hover=(bb["x"] + bb["width"] / 2, bb["y"] + bb["height"] / 2))
    r.mark("r_open", focus=["#po-rounds"])
    # 像同事那樣填：階段 → 做了什麼 → 主因 → 說明
    s.move_to("#rd-stage"); pg.wait_for_timeout(300)
    pg.select_option("#rd-stage", "2"); pg.wait_for_timeout(700)
    s.click("#po-rounds .rd-kind[value='date']"); pg.wait_for_timeout(500)
    s.click("#po-rounds .rd-reason[value='產能不及']"); pg.wait_for_timeout(300)
    s.click("#po-rounds .rd-reason[value='約倉問題']"); pg.wait_for_timeout(300)
    s.type("#rd-note", "酷澎下修 2 項；到貨日另約，等後台更新", delay=60)
    r.mark("r_filled", focus=["#po-rounds"])
    s.click("#rd-ok")
    pg.wait_for_function("document.querySelector('#po-rounds').innerText.includes('處理 1 次')", timeout=8000)
    pg.mouse.move(bb["x"] + bb["width"] / 2, bb["y"] + 260, steps=16)
    r.mark("r_done", focus=["#po-rounds"], wait=900)
    pg.wait_for_timeout(600)
    pg.keyboard.press("Escape"); pg.wait_for_timeout(500)

    # 改單統計：期間拉到十月，把灌的那幾個星期都算進來
    r.go("/portal/stats", "#st-kpi .kpi"); pg.wait_for_timeout(900)
    # 期間是 seed_portal 算的（info["period"]）：起始拉到十月；月底錄的時候有幾張 PO 下個月才到貨，結束月份也要往後拉，不然那幾張不算
    # （2026-11-23 錄的那次：56 張裡有 3 張十二月到貨）。等的是統計那支 API 回來，不看表格列數（十月沒有 PO 的時候表格不會多一列）。
    for sel, v in (("#st-from", info["period"][0]), ("#st-to", info["period"][1])):
        if pg.input_value(sel) == v:
            continue
        s.move_to(sel); pg.wait_for_timeout(250)
        with pg.expect_response(lambda x: "/api/master/stats?" in x.url and x.status == 200, timeout=10000):
            pg.evaluate("([q, v]) => { const e = document.querySelector(q); e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); }", [sel, v])
        pg.wait_for_timeout(700)
    assert (pg.input_value("#st-from"), pg.input_value("#st-to")) == tuple(info["period"]), "改單統計的期間沒設成"
    s.move_to("#st-kpi .kpi", nth=1); pg.wait_for_timeout(250); s.move_to("#st-kpi .kpi", nth=2)
    r.mark("t_cards", focus=["#st-kpi"])
    r.scroll_to("#pending", top=78)
    s.move_to("#pd-table tbody tr", nth=0)
    r.mark("t_after", focus=["#pending"])
    r.scroll_to("section:has(#st-months)", top=78)
    s.move_to("#st-months tbody tr", nth=1)
    r.mark("t_monthly", focus=["section:has(#st-months)"])
    r.scroll_to("section:has(#st-lines)", top=78)
    s.move_to("#st-lines tbody tr", nth=0)
    # 2026-11-20 版各線別多了原始下單、目前出貨、少出三欄：1440 寬放得下（字會折行），哪天再加欄位放不下、要左右捲了，這裡會講
    over = pg.evaluate("(() => { const w = document.querySelector('#st-lines').closest('.tbl-wrap'); return w.scrollWidth - w.clientWidth; })()")
    heads = pg.evaluate("[...document.querySelectorAll('#st-lines thead th')].map(x => x.innerText.trim())")
    assert heads[-3:] == ["原始下單", "目前出貨", "少出"], ("各線別最後三欄不是金額那三欄", heads)
    if over > 1:
        print(f"  [警告] 各線別的表格比卡片寬 {over}px，右邊的欄位在畫面外")
    r.mark("t_lines", focus=["section:has(#st-lines)"])
    r.scroll_to("section:has(#st-reasons)", top=78)
    s.move_to("#st-reasons tbody tr", nth=1)
    r.mark("t_reasons", focus=["section:has(#st-reasons)", "section:has(#st-stages)"])
    r.scroll_to("section:has(#st-top)", top=78)
    s.move_to("#st-top tbody tr", nth=0)
    r.mark("t_top", focus=["section:has(#st-top)"])
    pg.wait_for_timeout(700)

    # 切換通路：蝦皮特選、MOMO（2026-11-18 版）。每個通路三個記號：
    #   c_xxx＝最上面那五張卡（訂單張數、改單次數、三種來源各幾次）＋每月統計＋各線別（含我方修改的主要原因）
    #   c_xxx_why＝「通路修改內容」「我方修改原因」兩張表；c_xxx_detail＝明細（一次改單一列，寫改了什麼）
    for ch, name in (("shopee", "蝦皮"), ("momo", "MOMO")):
        pg.mouse.move(*EDGE, steps=16); pg.wait_for_timeout(150)
        r.wheel(-pg.evaluate("scrollY"), step=90, pause=24)
        assert pg.evaluate("scrollY") == 0
        s.click(f"#ch-tabs .ch-tab[data-ch='{ch}']")
        pg.wait_for_function("n => document.querySelector('#cx-src0').textContent === n + '修改' && !document.querySelector('#st-chbox').hidden "
                             "&& document.querySelectorAll('#cx-events tbody tr').length > 3", arg="MOMO " if ch == "momo" else name, timeout=10000)
        pg.wait_for_timeout(700)
        r.scroll_to("#cx-kpi", top=78, hover=EDGE)
        s.move_to("#cx-kpi .kpi", nth=2); pg.wait_for_timeout(250); s.move_to("#cx-kpi .kpi", nth=3); pg.wait_for_timeout(250); s.move_to("#cx-kpi .kpi", nth=4)
        r.mark(f"c_{ch}", focus=["#cx-kpi", "section:has(#cx-lines)"], cards=["#cx-kpi"], lines=["section:has(#cx-lines)"], monthly=["section:has(#cx-months)"])
        pg.wait_for_timeout(500)
        r.scroll_to("#st-chbox .bottom", top=78, hover=EDGE)
        s.move_to("#cx-what tbody tr", nth=0); pg.wait_for_timeout(250); s.move_to("#cx-why tbody tr", nth=0)
        r.mark(f"c_{ch}_why", focus=["#st-chbox .bottom"], what=["section:has(#cx-what)"], why=["section:has(#cx-why)"])
        pg.wait_for_timeout(500)
        r.scroll_to("#cx-detail", top=78, hover=EDGE)
        s.move_to("#cx-events tbody tr td:nth-child(7)", nth=1)
        r.mark(f"c_{ch}_detail", focus=["#cx-detail"])
        pg.wait_for_timeout(700)
    return s.save("stats")


def rec_survey(r, info):
    """通路作業問卷（/survey）：選線別 → 步驟 1「上傳檔案」（兩個通路現在的做法＋PChome 的題目）→ 點選 → 系統自動儲存。填的人就是登入的帳號。
    挑步驟 1 是因為它整段放得進一個畫面（兩邊的做法＋前兩題）；步驟 3「待產 EIP 採購單」比較長，第二題會被最下面那一條擋住。"""
    s, pg = r.s, r.pg
    Q = lambda n: f".q:has(input[name='q{n}'])"                                    # noqa: E731 — 第 n 題那一格
    opt = lambda n, v: f"input[name='q{n}'][value='{v}']"                          # noqa: E731
    r.begin("/survey", "#lines label", settle=900)
    if pg.query_selector("#admin-box"):                                            # 登入的帳號是管理員時多一塊「填寫狀況」，等它讀完
        pg.wait_for_function("!document.querySelector('#admin-who').textContent.includes('讀取中')", timeout=8000)
    pg.mouse.move(720, 400, steps=10)
    r.mark("q_start", focus=["header .in", ".wrap > .lead", "#line-box"], line=["#line-box"])
    s.move_to("#lines label", nth=1); pg.wait_for_timeout(300)
    pg.locator("#lines input[value='瑪氏']").click(); pg.wait_for_function("document.querySelector('#qs').className === ''", timeout=5000); pg.wait_for_timeout(600)
    # 步驟 1「上傳檔案」捲到黏在最上面的「線別」框正下方
    r.scroll_to("#s0", top=122, hover=(720, 520))
    STEP = ["#s0", "#s0 + .lead", "#s0 ~ .now", "#s0 ~ .ask", Q(1), Q(2)]
    bar, sticky = pg.locator(".bar").bounding_box()["y"], pg.locator("#line-box").bounding_box()
    q2 = pg.locator(Q(2)).bounding_box(); pill = pg.locator("#s0 .n").bounding_box()
    assert q2["y"] + q2["height"] < bar - 4, ("第 2 題被最下面那一條擋到了", q2, bar)
    assert pill["y"] > sticky["y"] + sticky["height"] + 4, ("步驟標題被線別框擋到了", pill, sticky)
    assert "上傳檔案" in pg.inner_text("#s0")
    s.move_to("#s0 ~ .now > div", nth=0, dy=.3); pg.wait_for_timeout(350); s.move_to("#s0 ~ .now > div", nth=1, dy=.3)
    r.mark("q_step", focus=STEP, now=["#s0 ~ .now"], ask=[Q(1), Q(2)])
    pg.wait_for_timeout(500)
    for n, v in ((1, "Excel"), (2, "不會變（跟 MOMO 一樣）")):
        s.move_to(opt(n, v)); pg.locator(opt(n, v)).click(); pg.wait_for_timeout(500)
    pg.wait_for_function("document.querySelector('#state').textContent.startsWith('已儲存')", timeout=8000)
    pg.mouse.move(980, 700, steps=10)
    r.mark("q_answer", focus=[Q(1), Q(2)], step=STEP)
    pg.wait_for_timeout(500)
    # 往下捲一點，把這一步的第三題也答完
    r.scroll_to("#s0 ~ .ask", top=150, hover=(720, 520))
    v = "匯入後在清單上改（跟 MOMO 一樣）"
    s.move_to(opt(3, v)); pg.locator(opt(3, v)).click(); pg.wait_for_timeout(450)
    pg.wait_for_function("document.querySelector('#cnt').textContent.includes('已答 3／') && document.querySelector('#state').textContent.startsWith('已儲存') "
                         "&& document.querySelector('#lines').innerText.includes('已填 3 項')", timeout=8000)
    s.move_to("#state", dx=1.5, dy=.8); pg.wait_for_timeout(300)                # 游標停在「已儲存」右邊，不要蓋到字
    r.mark("q_saved", focus=[Q(1), Q(2), Q(3), ".bar"], bar=[".bar"], line=["#line-box"], asked=[Q(1), Q(2), Q(3)])
    pg.wait_for_timeout(800)
    return s.save("survey")


MANUAL_OK = ("common_home", "momo_side", "momo_buy", "momo_eip", "momo_eip_filled", "momo_marsback")     # 會出現在錄影裡的手冊截圖（都是空系統或假資料拍的）


def rec_guide(r, info):
    s, pg = r.s, r.pg
    # 手冊截圖只放行上面那幾張：其他的（酷澎那幾章是拿範例檔拍的）不載入，錄影和簡報資料夾裡都不會有
    def gate(route):
        name = route.request.url.split("/")[-1].split("?")[0].rsplit(".", 1)[0]
        route.continue_() if name in MANUAL_OK else route.abort()
    pg.route("**/static/manual/*", gate)

    r.begin("/momo", "#stages .st", settle=1200)
    pg.mouse.move(700, 380, steps=10); pg.wait_for_timeout(300)
    s.click("#help-btn"); pg.wait_for_selector("#help-dr.open .det", timeout=15000)
    pg.wait_for_function("() => { const i = [...document.querySelectorAll('#help-dr .det img')]; return i.length > 0 && i.every(x => x.complete && x.naturalWidth > 0); }", timeout=15000)
    pg.wait_for_timeout(900)
    s.move_to("#help-body", dy=.3)
    r.mark("g_help", focus=["#help-dr"])
    r.wheel(330); pg.wait_for_timeout(500)
    s.click("#help-next")
    pg.wait_for_function("() => { const i = [...document.querySelectorAll('#help-dr .det img')]; return i.length > 0 && i.every(x => x.complete && x.naturalWidth > 0); }", timeout=15000)
    pg.wait_for_timeout(900)
    s.click("#help-x"); pg.wait_for_timeout(500)
    s.click("#hs-open"); pg.wait_for_selector("#hs-dlg[open]", timeout=8000); pg.wait_for_selector("#hs-table tbody tr", timeout=8000); pg.wait_for_timeout(700)
    s.move_to("#hs-table tbody tr", nth=1)
    r.mark("g_history", focus=["#hs-dlg"])
    # 換成「全部紀錄」、只看今天（全部有好幾百筆，錄影檔會多 1.6 MB）
    s.move_to("#hs-from"); pg.wait_for_timeout(200); pg.fill("#hs-from", info["today"].isoformat()); pg.wait_for_timeout(350)
    s.move_to("#hs-scope"); pg.wait_for_timeout(250); pg.select_option("#hs-scope", "all")
    # 等清單換成「今天、全部系統」：每一列都是今天的，而且不只 MOMO 一個系統（不能用筆數比：MOMO 自己的歷程可能比今天全部的還多）
    pg.wait_for_function("d => { const r = [...document.querySelectorAll('#hs-table tbody tr')]; return r.length > 3 && r.every(x => x.innerText.includes(d)) "
                         "&& r.some(x => x.innerText.includes('酷澎訂單管理系統')); }", arg=info["today"].isoformat(), timeout=10000); pg.wait_for_timeout(700)
    s.move_to("#hs-table tbody tr", nth=3)
    r.mark("g_history_all", focus=["#hs-dlg"])
    s.click("#hs-close"); pg.wait_for_timeout(400)

    # 使用手冊：停在最上面那一章（上面沒有別的圖，重播時位置不會跑掉）。這一頁在 1440 寬會比視窗寬，往右捲一點內容才完整
    r.go("/manual", "#mn-toc a")
    pg.wait_for_function("() => { const i = document.querySelector('#c1 .shot img'); return i && i.complete && i.naturalWidth > 0; }", timeout=15000)
    pg.wait_for_timeout(900)
    pg.mouse.move(900, 430, steps=14); pg.wait_for_timeout(200)
    over = pg.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
    if over > 4:
        r.wheel(min(over, 204), dx=True)
    r.wheel(170)
    s.move_to("#c1 .det h3"); pg.wait_for_timeout(200)
    r.mark("g_manual", focus=["#c1 .det"])
    r.wheel(300)
    s.move_to("#mn-toc a[href='#c5']"); pg.wait_for_timeout(300)

    r.go("/handbook", "iframe.sop-frame")
    pg.frame_locator("iframe.sop-frame").locator("h1").wait_for(timeout=15000); pg.wait_for_timeout(1200)
    pg.mouse.move(900, 450, steps=12)
    r.mark("g_handbook", focus=["iframe.sop-frame"])
    r.wheel(520)
    r.mark("g_handbook_2", focus=["iframe.sop-frame"])

    r.go("/coupang?due=1", "#tbody tr .due-chip"); pg.wait_for_timeout(1000)
    r.scroll_to("#stat-due-card", top=78, hover=(420, 300))
    s.move_to("#stat-due-card"); pg.wait_for_timeout(400)
    s.move_to("#tbody .due-chip", nth=1)
    r.mark("g_due", focus=["#stat-due-card"] + [f"#tbody tr:nth-child({i}) td:has(.due-chip)" for i in (1, 2, 3)])
    pg.wait_for_timeout(700)
    pg.unroute("**/static/manual/*")
    out = s.save("guide")
    slim(out)
    return out


def slim(path):
    """手冊截圖不塞在錄影檔裡（一張轉成 PNG 文字要 0.4～0.8 MB）：把 rr_dataURL 拿掉，重播時讀 deck/sys/static/manual/ 的 jpg。"""
    import json, shutil
    from rec_common import DECK, OMS
    ev = json.load(open(path, encoding="utf-8")); used = set(); n = [0]

    def walk(o):
        if isinstance(o, dict):
            a = o.get("attributes")
            if isinstance(a, dict) and "sys/static/manual/" in str(a.get("src", "")):
                used.add(a["src"].split("sys/static/manual/")[1].split("?")[0])
                if a.pop("rr_dataURL", None):
                    n[0] += 1
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)
    walk(ev)
    raw = json.dumps(ev, ensure_ascii=False); open(path, "w", encoding="utf-8").write(raw)
    # 簡報資料夾裡已經有的那幾張不蓋掉：momo_side.jpg 是手動把「倉別資料」（MOMO 倉庫地址、電話）塗掉過的，
    # 從系統再複製一次會把沒塗的蓋回來（公開網址上不能有）。系統那邊換了新截圖要更新時，自己看過、該塗的塗好再放。
    dst = os.path.join(DECK, "sys", "static", "manual"); os.makedirs(dst, exist_ok=True); copied, kept = [], []
    for name in sorted(used):
        if name.rsplit(".", 1)[0] in MANUAL_OK:
            src, to = os.path.join(OMS, "static", "manual", name), os.path.join(dst, name)
            if os.path.exists(to):
                kept.append(name + ("" if open(src, "rb").read() == open(to, "rb").read() else "（跟系統現在那張不一樣，沒動）"))
            else:
                shutil.copyfile(src, to); copied.append(name)
    print(f"guide: 拿掉 {n[0]} 張內嵌截圖，檔案剩 {len(raw) / 1e6:.2f} MB；deck/sys/static/manual/ 新複製：{copied or '沒有'}；原本就有、沒動：{kept}；"
          f"頁面上其他 {len(used) - len(copied) - len(kept)} 張手冊截圖沒有放（不在畫面上）")


def run(s, info, only=None):
    s.open()
    r = R(s)
    out = {}
    for name, fn in (("portal", rec_portal), ("stats", rec_stats), ("guide", rec_guide), ("survey", rec_survey)):
        if only and name not in only:
            continue
        out[name] = fn(r, info)
    s.close()
    return out

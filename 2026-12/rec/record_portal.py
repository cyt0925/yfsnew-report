"""三段錄影的操作本體（rec_portal.py 灌完資料之後呼叫 run）。"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
DBG = os.path.join(HERE, "dbg"); os.makedirs(DBG, exist_ok=True)


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

    def mark(self, id, focus=None, wait=550):
        self.pg.wait_for_timeout(wait)
        self.s.mark(id, focus=focus or [])
        self.s.shot(os.path.join(DBG, id + ".png"))


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
    pg.mouse.move(box["x"] + box["width"] * .62, box["y"] + box["height"] * .5, steps=30); pg.wait_for_timeout(500)
    r.mark("p_charts_tip", focus=[".charts > .card:nth-child(2)"])
    r.scroll_to(".content > .bottom", top=80)
    s.move_to("#cost .hero"); pg.wait_for_timeout(250); s.move_to("#log tbody tr", nth=1)
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
    s.move_to("#st-from"); pg.wait_for_timeout(250)
    first = pg.evaluate("document.querySelector('#st-months tbody tr td').innerText")
    pg.evaluate("v => { const e = document.querySelector('#st-from'); e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); }",
                "2026-10" if info["today"].isoformat()[:7] > "2026-10" else info["today"].isoformat()[:7])
    pg.wait_for_function("f => document.querySelectorAll('#st-months tbody tr').length > 1 || document.querySelector('#st-months tbody tr td').innerText !== f", arg=first, timeout=10000)
    pg.wait_for_timeout(700)
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
    r.mark("t_lines", focus=["section:has(#st-lines)"])
    r.scroll_to("section:has(#st-reasons)", top=78)
    s.move_to("#st-reasons tbody tr", nth=1)
    r.mark("t_reasons", focus=["section:has(#st-reasons)", "section:has(#st-stages)"])
    r.scroll_to("section:has(#st-top)", top=78)
    s.move_to("#st-top tbody tr", nth=0)
    r.mark("t_top", focus=["section:has(#st-top)"])
    pg.wait_for_timeout(700)
    return s.save("stats")


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
    n0 = pg.evaluate("document.querySelectorAll('#hs-table tbody tr').length")
    s.move_to("#hs-scope"); pg.wait_for_timeout(250); pg.select_option("#hs-scope", "all")
    pg.wait_for_function("n => document.querySelectorAll('#hs-table tbody tr').length > n", arg=n0, timeout=10000); pg.wait_for_timeout(700)
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
    dst = os.path.join(DECK, "sys", "static", "manual"); os.makedirs(dst, exist_ok=True); total = 0; copied = []
    for name in sorted(used):
        if name.rsplit(".", 1)[0] in MANUAL_OK:
            shutil.copyfile(os.path.join(OMS, "static", "manual", name), os.path.join(dst, name)); total += os.path.getsize(os.path.join(dst, name)); copied.append(name)
    print(f"guide: 拿掉 {n[0]} 張內嵌截圖，檔案剩 {len(raw) / 1e6:.2f} MB；複製到 deck/sys/static/manual/：{copied}（共 {total / 1024:.0f} KB）；"
          f"頁面上其他 {len(used) - len(copied)} 張手冊截圖沒有放（不在畫面上）")


def run(s, info, only=None):
    s.open()
    r = R(s)
    out = {}
    for name, fn in (("portal", rec_portal), ("stats", rec_stats), ("guide", rec_guide)):
        if only and name not in only:
            continue
        out[name] = fn(r, info)
    s.close()
    return out

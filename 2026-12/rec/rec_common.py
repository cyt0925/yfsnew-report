"""簡報示範畫面的共用錄製工具。

做的事：把 YFS 訂單系統在本機跑起來（SQLite、假資料），用 Playwright 操作，
同時用 rrweb 把「網頁本身的變化」錄成事件（不是影片）。簡報重播這些事件，放大不會糊。

用法（每支錄製腳本）：
    from rec_common import Session, OMS
    s = Session("shopee")                 # 資料夾名稱要每支腳本不同，才能同時跑
    tc = s.tc                             # 已登入的 Flask test client，可以直接打 API 灌資料
    pg = s.open()                         # 已登入的 Playwright 頁面（1440×810），之後的操作才會被錄
    pg.goto(s.base + "/shopee"); ...
    s.mark("s1_start", focus=[".dzbox", "#stages"])          # 記一個分界點；focus 是簡報要拉近看的元素選擇器
    s.move_to(".pv .ok"); pg.click(".pv .ok")                # 先把游標慢慢移過去再點，重播才像人在操作
    s.save("shopee")                      # 存成 deck/rec/shopee.json，並印出所有記號
    s.close()

規矩：
- 登入在 open() 裡做完才開始錄，帳號密碼不會進錄影。
- 每個 mark 之前先 pg.wait_for_timeout(300~600) 讓畫面穩定；mark 的 id 不能重複。
- 一段錄影可以跨頁（goto 別的網址），重播器會處理。
- 下載檔案用 with pg.expect_download() as d: 包起來，不要讓瀏覽器真的跳走。
"""
import io, json, os, shutil, socket, sys, threading, time, logging

HERE = os.path.dirname(os.path.abspath(__file__))
PROTO = os.path.dirname(HERE)
OMS = os.environ.get("YFS_OMS", "/home/user/yfs/coupang-oms")      # cyt0925/yfs 的 coupang-oms（只讀，不要改它）
PW = os.environ.get("YFS_DEMO_PW") or sys.exit("請先設定 YFS_DEMO_PW（本機測試帳號的密碼，見 coupang-oms 的 README）")
DECK = os.path.join(PROTO, "deck")
RRWEB = open(os.path.join(DECK, "lib", "rrweb.min.js"), encoding="utf-8").read()
INIT = RRWEB + """
;(() => { if (window.top !== window) return;
  const go = () => { try { rrweb.record({ emit: e => window.__rr(JSON.stringify(e)), inlineImages: true, inlineStylesheet: true,
      sampling: { mousemove: 20, scroll: 60 }, collectFonts: true }); } catch (err) { console.error('rr', err); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  window.__mark = (tag, payload) => rrweb.record.addCustomEvent(tag, payload || {});
})();"""


class Session:
    def __init__(self, name, fresh=True):
        self.name = name
        data = os.path.join(PROTO, "data_" + name)
        if fresh and os.path.isdir(data):
            shutil.rmtree(data)
        os.makedirs(data, exist_ok=True)
        os.environ["COUPANG_OMS_DATA"] = data
        self.data = data
        sys.path.insert(0, OMS); os.chdir(OMS)
        import db, app as app_module
        logging.getLogger("werkzeug").setLevel(logging.ERROR)
        db.init_db()
        self.db = db; self.app = app_module.app
        self.tc = self.app.test_client()
        self.tc.post("/login", data={"username": "Jerry", "password": PW})
        s = socket.socket(); s.bind(("127.0.0.1", 0)); port = s.getsockname()[1]; s.close()
        threading.Thread(target=lambda: self.app.run(host="127.0.0.1", port=port, debug=False, use_reloader=False), daemon=True).start()
        time.sleep(1.5)
        self.base = f"http://127.0.0.1:{port}"
        self.events = []; self.pg = None; self._pw = None; self._marks = []

    # ── 灌資料用 ──
    def upload(self, url, path, name=None, **form):
        d = dict(form); d["file"] = (io.BytesIO(open(path, "rb").read()), name or os.path.basename(path))
        return self.tc.post(url, data=d, content_type="multipart/form-data")

    # ── 瀏覽器 ──
    def open(self):
        from playwright.sync_api import sync_playwright
        self._pw = sync_playwright().start()
        self._b = self._pw.chromium.launch(executable_path="/opt/pw-browsers/chromium")
        self.ctx = self._b.new_context(viewport={"width": 1440, "height": 810}, locale="zh-TW", timezone_id="Asia/Taipei", accept_downloads=True)
        self.ctx.expose_function("__rr", lambda s: self.events.append(json.loads(s)))
        pg = self.ctx.new_page(); self.pg = pg
        pg.on("console", lambda m: print("  [console error]", m.text[:200]) if m.type == "error" else None)
        pg.on("pageerror", lambda e: print("  [page error]", str(e)[:200]))
        pg.goto(self.base + "/login"); pg.fill("input[name=username]", "Jerry"); pg.fill("input[name=password]", PW); pg.click("button[type=submit]")
        pg.wait_for_load_state()
        self.ctx.add_init_script(INIT)          # 從這裡之後開的頁面才會被錄
        return pg

    def mark(self, id, focus=None, **kw):
        """記一個分界點。focus：這一刻簡報要拉近看的元素（CSS 選擇器的清單，要在頁面上真的找得到）。"""
        assert id not in self._marks, f"mark id 重複：{id}"
        for sel in (focus or []):
            if not self.pg.query_selector(sel):
                print(f"  [警告] mark {id} 的 focus 找不到：{sel}")
        self.pg.evaluate("([t, p]) => window.__mark(t, p)", ["step", {"id": id, "focus": focus or [], **kw}])
        self._marks.append(id); self.pg.wait_for_timeout(150)

    def move_to(self, sel, dx=.5, dy=.5, steps=26, nth=0):
        """把游標慢慢移到某個元素上（重播時看得到游標走過去）。"""
        loc = self.pg.locator(sel).nth(nth); loc.scroll_into_view_if_needed()
        bb = loc.bounding_box()
        self.pg.mouse.move(bb["x"] + bb["width"] * dx, bb["y"] + bb["height"] * dy, steps=steps); self.pg.wait_for_timeout(250)

    def click(self, sel, nth=0, **kw):
        self.move_to(sel, nth=nth); self.pg.locator(sel).nth(nth).click(**kw); self.pg.wait_for_timeout(350)

    def type(self, sel, text, nth=0, delay=70):
        self.move_to(sel, nth=nth); self.pg.locator(sel).nth(nth).click(); self.pg.keyboard.type(text, delay=delay); self.pg.wait_for_timeout(250)

    def save(self, name):
        s = json.dumps(self.events, ensure_ascii=False).replace(self.base + "/static/", "sys/static/").replace(self.base, "")
        assert PW not in s, "錄影裡出現密碼字樣"
        out = os.path.join(DECK, "rec", name + ".json")
        open(out, "w", encoding="utf-8").write(s)
        marks = [(e["data"]["payload"]["id"], e["timestamp"] - self.events[0]["timestamp"]) for e in self.events if e["type"] == 5]
        print(f"{name}: {len(self.events)} events, {len(s) / 1e6:.2f} MB, {len(marks)} marks")
        for i, t in marks: print(f"   {t / 1000:7.2f}s  {i}")
        self.events.clear(); self._marks.clear()
        return out

    def shot(self, path):
        """除錯用：拍目前畫面（不會進錄影）。"""
        self.pg.screenshot(path=path)

    def close(self):
        try: self._b.close(); self._pw.stop()
        except Exception: pass

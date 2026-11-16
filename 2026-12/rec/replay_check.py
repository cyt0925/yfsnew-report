"""檢查一段錄影重播起來對不對：對每個 mark 跳過去截一張圖，存到 rec/check/<名稱>/<mark>.png。
用法：python replay_check.py shopee"""
import os, sys, http.server, threading, functools, socket
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); DECK = os.path.join(os.path.dirname(HERE), "deck")
name = sys.argv[1]; out = os.path.join(HERE, "check", name); os.makedirs(out, exist_ok=True)
s = socket.socket(); s.bind(("127.0.0.1", 0)); port = s.getsockname()[1]; s.close()
class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
threading.Thread(target=http.server.ThreadingHTTPServer(("127.0.0.1", port), functools.partial(H, directory=DECK)).serve_forever, daemon=True).start()
PAGE = """<!doctype html><meta charset=utf-8><link rel=stylesheet href=lib/rrweb.css><style>body{margin:0}.replayer-mouse-tail{display:none}</style>
<div id=c></div><script src=lib/rrweb.min.js></script><script>
fetch('rec/%s.json').then(r => r.json()).then(ev => { const t0 = ev[0].timestamp;
  window.rp = new rrweb.Replayer(ev, { root: document.getElementById('c'), mouseTail: false, showWarning: false });
  window.marks = ev.filter(e => e.type === 5).map(e => ({ id: e.data.payload.id, t: e.timestamp - t0, focus: e.data.payload.focus || [] }));
  window.end = ev[ev.length - 1].timestamp - t0; window.ready = true; });</script>""" % name
open(os.path.join(DECK, "_check.html"), "w", encoding="utf-8").write(PAGE)
with sync_playwright() as p:
    b = p.chromium.launch(executable_path="/opt/pw-browsers/chromium"); pg = b.new_page(viewport={"width": 1440, "height": 810})
    errs = []; pg.on("pageerror", lambda e: errs.append(str(e)[:150]))
    pg.goto(f"http://127.0.0.1:{port}/_check.html"); pg.wait_for_function("window.ready", timeout=30000)
    for m in pg.evaluate("marks"):
        pg.evaluate("([t, e]) => rp.pause(Math.min(t + 60, e))", [m["t"], pg.evaluate("end")]); pg.wait_for_timeout(500)
        miss = pg.evaluate("f => f.filter(s => { try { return !rp.iframe.contentDocument.querySelector(s) } catch (e) { return true } })", m["focus"])
        pg.screenshot(path=os.path.join(out, m["id"] + ".png"))
        print(f"  {m['id']:<22} {m['t'] / 1000:6.2f}s" + (f"   focus 找不到：{miss}" if miss else ""))
    print("errors:", errs[:5]); b.close()
os.remove(os.path.join(DECK, "_check.html"))

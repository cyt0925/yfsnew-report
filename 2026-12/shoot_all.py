"""把簡報每一步都截一張圖（out/NN_場景_步驟.png），並拼成縮圖總覽，用來檢查版面。
用法：python shoot_all.py [寬 高] [--only s-lanes]"""
import os, sys, http.server, threading, functools, socket, shutil, subprocess, glob
from playwright.sync_api import sync_playwright
P = os.path.dirname(os.path.abspath(__file__)); DECK = P + "/deck"
args = [a for a in sys.argv[1:] if not a.startswith("--")]; only = sys.argv[sys.argv.index("--only") + 1].split(",") if "--only" in sys.argv else None
W, H = (int(args[0]), int(args[1])) if len(args) >= 2 else (1920, 1080)
OUT = f"{P}/out_{W}"; 
if not only: shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(OUT, exist_ok=True)
s = socket.socket(); s.bind(("127.0.0.1", 0)); port = s.getsockname()[1]; s.close()
class Hd(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
threading.Thread(target=http.server.ThreadingHTTPServer(("127.0.0.1", port), functools.partial(Hd, directory=DECK)).serve_forever, daemon=True).start()
px = os.environ.get("HTTPS_PROXY")
with sync_playwright() as p:
    b = p.chromium.launch(executable_path="/opt/pw-browsers/chromium", proxy={"server": px, "bypass": "127.0.0.1,localhost"} if px else None)
    pg = b.new_context(viewport={"width": W, "height": H}, ignore_https_errors=True).new_page()
    errs = []; pg.on("pageerror", lambda e: errs.append("PAGE " + str(e)[:200])); pg.on("console", lambda m: errs.append(m.type + " " + m.text[:200]) if m.type in ("error", "warning") else None)
    pg.on("response", lambda r: errs.append(f"{r.status} {r.url[-60:]}") if r.status >= 400 else None)
    pg.goto(f"http://127.0.0.1:{port}/index.html", wait_until="domcontentloaded"); pg.wait_for_function("window.__ready", timeout=60000)
    pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(1500)
    scenes = pg.evaluate("__SC.map(s => [s.id, s.scene.steps])"); n = 0
    for i, (sid, steps) in enumerate(scenes):
        if only and sid not in only: n += steps; continue
        pg.evaluate("i => __goto(i, 0, false)", i); pg.wait_for_function("!__busy()", timeout=20000); pg.wait_for_timeout(2600)
        for st in range(steps):
            if st: pg.keyboard.press("ArrowRight"); pg.wait_for_timeout(250); pg.wait_for_function("!__busy()", timeout=30000); pg.wait_for_timeout(1900)
            pg.screenshot(path=f"{OUT}/{n:02d}_{sid}_{st}.png"); n += 1
    print("pages", n, "| errors:", errs[:8]); b.close()
# 縮圖總覽：每張 4×3
files = sorted(glob.glob(OUT + "/*.png")); [os.remove(f) for f in glob.glob(OUT + "/sheet_*.jpg")]
files = [f for f in files if "sheet_" not in f]
for k in range(0, len(files), 12):
    grp = files[k:k + 12]; ins = sum([["-i", f] for f in grp], [])
    lay = "|".join(f"{(j % 4) * 480}_{(j // 4) * 270}" for j in range(len(grp)))
    flt = "".join(f"[{j}]scale=480:270[v{j}];" for j in range(len(grp))) + "".join(f"[v{j}]" for j in range(len(grp))) + f"xstack=inputs={len(grp)}:layout={lay}:fill=white"
    if len(grp) == 1: flt = "[0]scale=480:270"
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", *ins, "-filter_complex", flt, f"{OUT}/sheet_{k // 12}.jpg"])
print("sheets", len(glob.glob(OUT + "/sheet_*.jpg")))

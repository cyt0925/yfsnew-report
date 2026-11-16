"""錄製檔上線前的整理：公開網址上不放同仁名字，也不放簡報沒用到的內部手冊內容。
用法：python sanitize.py <rec 目錄>     （就地改寫，可重複執行）"""
import json, os, re, sys

NAMES = {"Alice": "同仁A", "小真": "同仁B", "Penny": "同仁C", "Becky": "同仁D", "Chloe": "同仁E",
         "Ivan": "同仁F", "妮可": "同仁G", "千容": "同仁H", "大宋": "同仁I"}
# 簡報沒用到的段落（從 from 這個標記之後的第一次換頁，剪到 until 標記所在那一頁的開頭）
CUT = {"guide": [("g_history_all", "g_due")]}
DROP_MARKS = {"guide": {"g_manual", "g_handbook", "g_handbook_2"}}


def mark(e):
    return e["data"]["payload"]["id"] if e.get("type") == 5 and e["data"].get("tag") == "step" else None


def cut(ev, a, b):
    ia = next(i for i, e in enumerate(ev) if mark(e) == a)
    ib = next(i for i, e in enumerate(ev) if mark(e) == b)
    metas = [i for i, e in enumerate(ev) if e["type"] == 4]
    start = next(i for i in metas if i > ia)            # a 之後第一次換頁
    end = max(i for i in metas if i < ib)               # b 所在頁面的開頭
    if end <= start:
        return ev
    gap = ev[end]["timestamp"] - ev[start]["timestamp"]
    tail = [dict(e, timestamp=e["timestamp"] - gap) for e in ev[end:]]
    return ev[:start] + tail


def main(d):
    for f in sorted(os.listdir(d)):
        if not f.endswith(".json"):
            continue
        name, p = f[:-5], os.path.join(d, f)
        s = open(p, encoding="utf-8").read()
        before = len(s)
        for k, v in NAMES.items():
            s = s.replace(k, v)
        ev = json.loads(s)
        for a, b in CUT.get(name, []):
            if any(mark(e) == a for e in ev) and any(mark(e) in DROP_MARKS[name] for e in ev):
                ev = cut(ev, a, b)
        s = json.dumps(ev, ensure_ascii=False, separators=(",", ":"))
        left = {k: s.count(k) for k in NAMES if k in s}
        mails = sorted(set(re.findall(r"[\w.+-]+@[\w-]+\.[\w.]+", s)))
        assert not left, (f, left)
        open(p, "w", encoding="utf-8").write(s)
        print(f"{name:8s} {before/1e6:5.2f} → {len(s.encode())/1e6:5.2f} MB  marks={[m for m in map(mark, ev) if m]}  emails={mails}")


if __name__ == "__main__":
    main(sys.argv[1])

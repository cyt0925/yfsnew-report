"""錄四段：portal（首頁總覽）、stats（記一輪處理完成 → 改單統計 → 切換通路看蝦皮特選、MOMO）、
guide（這一步怎麼做、歷程、手冊、講義、快到貨）、survey（通路作業問卷）。
用法：python rec_portal.py            全部錄
      python rec_portal.py --seed     只灌資料、印出首頁和改單統計的數字（不開瀏覽器）
      python rec_portal.py survey     只錄某一段（portal／stats／guide／survey，可以給好幾個）
假資料：酷澎在 seed_portal.py，蝦皮特選、MOMO 在 seed_channels.py。
"""
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from rec_common import Session, DECK
import seed_portal


def numbers(s, info):
    """把簡報文案要對的數字印出來。"""
    tc = s.tc
    d = tc.get("/api/portal/summary").get_json()
    print("\n== 首頁 ==", d["today"])
    for t in d["tasks"]:
        print("  今日事項:", t["level_text"], "|", t["title"], "|", t["detail"])
    for c in d["channels"]:
        if c.get("live"):
            print(f"  {c['title']}: 今日新進 {c.get('new_today')}、待出貨 {c.get('pending_pos')}、本月出貨 {c.get('month_boxes')} 箱、最後匯入 {c.get('last_import')}")
            if c.get("daily_new"):
                print("    近30天:", " ".join(str(x["value"]) for x in c["daily_new"]))
            if c.get("ship_7d"):
                print("    未來7天箱數:", " ".join(f"{x['date'][5:]}={x['value']}" for x in c["ship_7d"]))
    ch = d["changes"]
    print("  本月改單:", {k: ch[k] for k in ("month", "rounds", "stages", "pos", "changed_pos", "changed_pct", "pending")}, ch["reasons"])
    for c in d.get("ch_changes") or []:
        print(f"  本月改單 {c['name']}:", c["events"], "次", [(x["name"], x["count"]) for x in c["srcs"]], f"有改單 {c['changed']}/{c['orders']} 張（{c['pct']}%）",
              [(x["name"], x["count"]) for x in c["top"]])
    for r in d["recent"]:
        print("  最近:", r["at"][5:16], r["who"], "|", r["system"], "|", r["what"], r["po"], "|", r["old"][:30], "→", r["new"][:40])
    m0 = "2026-10"; m1 = d["today"][:7]
    st = tc.get(f"/api/master/stats?month={m0}&month_to={m1}").get_json()
    t = st["total"]
    print(f"\n== 改單統計 {m0}～{m1} ==")
    print("  合計:", {k: t[k] for k in ("pos", "items", "skus", "changed_pos", "changed_pct", "per_changed_po", "rounds", "stages", "kinds", "events", "pending")})
    for m in st["months"]:
        print("  月:", m["month"], {k: m[k] for k in ("pos", "changed_pos", "changed_pct", "rounds", "stages", "kinds", "events", "pending", "orig_amount", "cur_amount", "short_amount", "short_pct")})
    for r in st["by_line"]:
        print("  線別:", r)
    print("  主因:", [(r["cat_label"], r["reason"], r["n"]) for r in st["reasons"]])
    print("  階段:", [(x["short"], x["rounds"], x["kinds"]) for x in st["stages"]])
    for p in st["pending"]:
        print("  完成後又改:", p)
    for p in st["top_pos"][:8]:
        print("  最多次:", p["po_number"], p["lines"], p["rounds"], p["reasons"])
    for ch in ("shopee", "momo"):
        cs = tc.get(f"/api/portal/chstats?ch={ch}&month={m0}&month_to={m1}").get_json()
        print(f"\n== 改單統計（{cs['name']}）{m0}～{m1} ==")
        print("  合計:", cs["total"], cs["srcs"])
        for m in cs["months"]:
            print("  月:", m)
        for r in cs["lines"]:
            print("  線別:", r)
        print(f"  {cs['srcs'][0]}內容:", [(x["name"], x["count"]) for x in cs["what"]])
        print("  我方修改原因:", [(x["name"], x["count"], x["cut"]) for x in cs["reasons"]])
        for e in cs["events"]:
            print("  明細:", e["at"], e["order"], e["date"], "、".join(e["lines"]), e["sku"], "|", e["src"], "|", e["what"], "|", "、".join(e["reasons"]), e["cut"] or "", e["who"])
    o = tc.get("/api/orders?page_size=10").get_json()
    print("\n  訂單品項數:", o["total"], o["summary"])
    return d, st


def main():
    seed_only = "--seed" in sys.argv
    s = Session("portal")
    info = seed_portal.build(s)
    numbers(s, info)
    if seed_only:
        return
    import record_portal
    only = [a for a in sys.argv[1:] if not a.startswith("-")]
    record_portal.run(s, info, only or None)


if __name__ == "__main__":
    main()

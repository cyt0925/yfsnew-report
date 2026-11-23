"""蝦皮特選訂單管理（/shopee）的示範錄影：一段錄完六站。
    匯入訂單 → 比對差異 → 產出採購單 → 回填單號 → 核對缺貨（產拋單檔）→ 通知蝦皮、在蝦皮採購單 PDF 上畫缺貨
用法：python rec_shopee.py            → deck/rec/shopee.json、deck/img/shopee_pdf_before.png、shopee_pdf_after.png
     DBG=1 python rec_shopee.py      → 每個 mark 另外拍一張到 rec/dbg_shopee/（不進錄影）
全部是假資料：單號、數量、料號都是編的；品名用市面上買得到的品牌。做法照 test_shopee.py／test_master_ui.py【6e】。"""
import io, os, re, shutil, sys

HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from rec_common import Session, DECK                                   # noqa: E402
import openpyxl, pymupdf, xlwt                                          # noqa: E402

FILES = os.path.join(HERE, "files_shopee"); shutil.rmtree(FILES, ignore_errors=True); os.makedirs(FILES)
DBG = os.path.join(HERE, "dbg_shopee") if os.environ.get("DBG") else ""
if DBG:
    shutil.rmtree(DBG, ignore_errors=True); os.makedirs(DBG)

# ── 假資料 ────────────────────────────────────────────────────────────────
PR_A1, PR_A2 = "PRTWCOTWA202611160001", "PRTWCOTWA202611160002"       # 紙潔、還沒成 PO → 供應商直送 → EIP 採購單
PR_B, PO_B, IN_B = "PRTWCOTWA202611130007", "POTWCTWA26111300B", "INTWA0002611130021"   # 寶僑、已成 PO、有入庫單號 → 竹運出貨 → 拋單檔
EIP_PO = "PO202611160"
D_A, D_B = "2026-11-20", "2026-11-19"
#        蝦皮 SKU ID,             Supplier SKU ID,        品名,                                      數量, Selling Type
A1 = [("28800116501_1001", "1022248_CNN", "五月花 厚棒抽取式衛生紙 110抽x12包", 240, "Pcs"),
      ("28800116502_1002", "1031507_CNN", "得意 連續抽取式花紋衛生紙 100抽x10包", 120, "Pcs"),
      ("28800116503_1003", "1045012_PNN", "橘子工坊 天然濃縮洗衣精 1800ml", 96, "Pcs")]
A2 = [("28800116504_1004", "1052366_CNN", "柔情 抽取式衛生紙 100抽x12包", 144, "Pcs"),
      ("28800116505_1005", "1060419_PNN", "橘子工坊 碗盤洗滌液 480ml", 60, "Pcs")]
B = [("31400113701_2001", "4900000100017_CNN", "幫寶適 一級幫 黏貼型紙尿褲 M 52片", 96, "Pcs"),
     ("31400113702_2002", "4900000100024_CNN", "好自在 液體衛生棉 日用 24cm 10片", 120, "Pcs"),
     ("31400113703_2003", "4900000100031_PNN", "歐蕾 多元修護日霜 50g", 48, "Pcs")]
QTY_OLD, QTY_NEW = 240, 200                                           # 重傳時蝦皮把 A1 第一品改少

PO_HDR = ["PR ID", "PO ID", "Is Jit", "Warehouse", "PR Creation Date", "PO Creation Date", "Expected Delivery Time", "Shopee SKU ID",
          "Supplier SKU ID", "Shopee SKU Name", "Shopee Requested Qty (unit)", "Shopee Requested Qty (pcs)", "Unit Name",
          "Shopee Request Price (before-tax)", "Shopee Request Price (after-tax)", "Tax %", "Shopee Requested Value (before-tax)",
          "Shopee Requested Value (after-tax)", "Supplier Confirmed Qty (unit)", "Supplier Confirmed Qty (pcs)",
          "Supplier Confirmed Price (before-tax)", "Supplier Confirmed Price (after-tax)", "Supplier Confirmed Value (after-tax)",
          "Brand", "EAN / UPC", "EAN / UPC2", "MOQ", "Sourcing Status", "Next Available Date", "Selling Type", "Inbound ID"]


def purchase_xlsx(path, first_qty):
    """蝦皮採購單（PurchaseOrder_….xlsx），表頭照蝦皮後台下載的；三張單放同一個檔。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "Sheet1"; ws.append(PO_HDR)
    for pr, po, inb, date, rows in ((PR_A1, None, None, D_A, A1), (PR_A2, None, None, D_A, A2), (PR_B, PO_B, IN_B, D_B, B)):
        for k, (sku, sup, name, qty, st) in enumerate(rows):
            if pr == PR_A1 and k == 0:
                qty = first_qty
            r = dict.fromkeys(PO_HDR)
            r.update({"PR ID": pr, "PO ID": po, "Is Jit": "No", "Warehouse": "TWA", "PR Creation Date": "2026-11-13 10:20" if po else "2026-11-16 09:12",
                      "PO Creation Date": "2026-11-14 15:02" if po else None, "Expected Delivery Time": date, "Shopee SKU ID": sku, "Supplier SKU ID": sup,
                      "Shopee SKU Name": name, "Shopee Requested Qty (unit)": str(qty), "Shopee Requested Qty (pcs)": str(qty), "Unit Name": "Pieces",
                      "Tax %": "5", "Brand": "NON-BRAND", "EAN / UPC": sup.split("_")[0], "MOQ": "1", "Sourcing Status": "Available",
                      "Selling Type": st, "Inbound ID": inb})
            ws.append([r[h] for h in PO_HDR])
    wb.save(path); return path


def price_xlsx(path, title, rows):
    """價格本整合：料號3（料號＋單位代碼）、箱入數。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = title; ws.append(["料號", "單位", "品名", "料號3", "箱入數", "進價"])
    for code3, unit, name, box in rows:
        ws.append([code3[:-1], unit, name, code3, box, 100])
    wb.save(path); return path


def mars_xlsx(path):
    """瑪氏商品總表（這段示範用不到瑪氏，只是讓上傳區那排狀態不要亮黃燈）。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "商品總表"
    ws.append(["瑪氏貨號", "Category", "Brand", "永豐料號", "品名(永豐建檔)", "系統價格(未稅)", "每中盒包數", "每箱中盒數", "每箱產品數(最小單位)",
               "料號", "料號2", "單位類別", "單位代碼", "箱入數", "中盒貼標", "效期天", "備註", "採購單箱備註"])
    for code, cat, brand, name, per_inner, inner, pcs, unit, ucode, box in (
            ("69990011", "Chocolate", "M&M'S", "M&M'S 牛奶巧克力 37g", 12, 12, 144, "箱", "R", 1), ("69990011", "Chocolate", "M&M'S", "M&M'S 牛奶巧克力 37g", 12, 12, 144, "盒", "Q", 12),
            ("69990022", "Petcare", "偉嘉", "偉嘉 成貓乾糧 海洋魚 1.1kg", 1, 6, 6, "箱", "R", 1), ("69990022", "Petcare", "偉嘉", "偉嘉 成貓乾糧 海洋魚 1.1kg", 1, 6, 6, "包", "C", 6)):
        ws.append([code, cat, brand, "M" + code, name, 100, per_inner, inner, pcs, "M" + code, "M" + code + ucode, unit, ucode, box, "", 365, "", ""])
    wb.save(path); return path


def life_xlsx(path):
    """竹運商品主檔（產品基本資料）：客戶品號＝料號＋單位代碼、商品年限(日)。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "產品基本資料"
    ws.append(["客戶品號", "商品名稱", "國際條碼", "供應商代碼", "單位", "長", "寬", "高", "重", "箱入數", "商品年限(日)"])
    for (_, sup, name, _, _), box in zip(B, (4, 12, 24)):
        base, suf = sup.split("_"); ws.append([base + suf[0], name, base, "PG", "", "", "", "", "", box, 1095])
    wb.save(path); return path


def ec_xls(path):
    """EC 即時庫存（全商品_yyyymmdd.xls，舊版 Excel）：好自在只剩 84。"""
    wb = xlwt.Workbook(); sh = wb.add_sheet("全商品")
    for j, h in enumerate(["結餘日期", "料號", "單位", "品名", "EC可用量"]):
        sh.write(0, j, h)
    for i, row in enumerate([("2026/11/16", "4900000100017", "包", B[0][2], 320), ("2026/11/16", "4900000100024", "包", B[1][2], 84),
                             ("2026/11/16", "4900000100031", "瓶", B[2][2], 60), ("2026/11/16", "4900000100048", "瓶", "飛柔 去屑洗髮乳 750ml", 212)], start=1):
        for j, v in enumerate(row):
            sh.write(i, j, v)
    wb.save(path); return path


def lots_xlsx(path):
    """竹運庫存效期表：歐蕾那批 2027-06-30 到期，到貨日 11/19 ＋ 1095×1/3 ＝ 2027-11-19 才允收 → 效期不足。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "sheet1"
    ws.append(["儲區", "客戶品號", "儲位", "可出貨量", "庫存量", "效期", "製造日期"])
    for row in (("良品區", "4900000100017C", "A-01-03", 200, 200, "20290315", "20260316"), ("良品區", "4900000100017C", "A-01-04", 120, 120, "20290402", "20260403"),
                ("良品區", "4900000100024C", "B-02-11", 84, 84, "20280930", "20251001"),
                ("良品區", "4900000100031P", "C-05-02", 60, 60, "20270630", "20240630"),
                ("良品區", "4900000100048P", "C-06-07", 212, 212, "20290110", "20260111")):
        ws.append(list(row))
    wb.save(path); return path


def stamp_png(path):
    """示範用的假印章（紅框＋字），不是任何一家公司的章。"""
    doc = pymupdf.open(); page = doc.new_page(width=120, height=120); red = (0.82, 0.1, 0.1)
    page.draw_rect(pymupdf.Rect(6, 6, 114, 114), color=red, width=5, radius=0.08)
    page.draw_rect(pymupdf.Rect(14, 14, 106, 106), color=red, width=1.5, radius=0.06)
    page.insert_textbox(pymupdf.Rect(14, 24, 106, 62), "示範商行", fontsize=20, fontname="china-t", color=red, align=1)
    page.insert_textbox(pymupdf.Rect(14, 62, 106, 100), "業務專用章", fontsize=15, fontname="china-t", color=red, align=1)
    page.get_pixmap(matrix=pymupdf.Matrix(3, 3), alpha=False).save(path); return path


def po_pdf(path):
    """假的蝦皮後台採購單 PDF（PURCHASE ORDER，橫式、有表格線、有文字），欄位照 test_shopee.po_pdf，多放品名和下面的合計讓它像一張單。"""
    doc = pymupdf.open(); page = doc.new_page(width=842, height=595)
    en = lambda pt, s, size=8, **kw: page.insert_text(pt, s, fontname="helv", fontsize=size, **kw)       # noqa: E731

    def zh(pt, text, size=8):                                # 中文用內建的繁中字型、英數用 Helvetica（全用中文字型的話英數會變全形）
        x, y = pt
        for run in re.findall(r"[\u2e80-\uffff]+|[^\u2e80-\uffff]+", text):
            fn = "china-t" if run[0] >= "\u2e80" else "helv"
            page.insert_text((x, y), run, fontname=fn, fontsize=size); x += pymupdf.get_text_length(run, fontname=fn, fontsize=size)
    page.insert_text((330, 44), "PURCHASE ORDER", fontname="hebo", fontsize=18)
    for k, (lab, val) in enumerate((("Purchase Order ID", PO_B), ("Purchase Request ID", PR_B), ("Supplier ID", "678050"), ("Supplier Name", "DEMO TRADING CO., LTD."))):
        en((40, 78 + 15 * k), lab, 8, color=(.35, .35, .35)); en((150, 78 + 15 * k), val, 9)
    for k, (lab, val) in enumerate((("Warehouse", "TWA"), ("Expected Delivery Time", D_B), ("Inbound ID", IN_B), ("Purchase Type", "Consignment"))):
        en((470, 78 + 15 * k), lab, 8, color=(.35, .35, .35)); en((590, 78 + 15 * k), val, 9)
    heads = ["No.", "Shopee SKU ID", "Supplier SKU ID", "Barcode", "Item Name", "Purchase QTY (unit)", "Unit Name", "Purchase QTY (pcs)", "Comment", "Actual Received"]
    xs = [30, 58, 150, 250, 322, 486, 564, 614, 692, 742, 812]
    y0 = 158; ys = [y0, y0 + 30] + [y0 + 30 + 40 * (j + 1) for j in range(len(B))]
    page.draw_rect(pymupdf.Rect(xs[0], ys[0], xs[-1], ys[1]), color=None, fill=(.94, .94, .94))
    for y in ys:
        page.draw_line((xs[0], y), (xs[-1], y), width=0.8)
    for x in xs:
        page.draw_line((x, ys[0]), (x, ys[-1]), width=0.8)
    for x, h in zip(xs, heads):
        en((x + 3, y0 + 18), h, 7)
    for j, (sku, sup, name, qty, _) in enumerate(B):
        yy = ys[1] + 40 * j + 23
        for x, v in zip(xs, [str(j + 1), sku, sup, sup.split("_")[0], None, str(qty), "Pieces", str(qty), "", ""]):
            if v:
                en((x + 3, yy), v, 8)
        zh((xs[4] + 3, yy), name, 8)
    tot = sum(r[3] for r in B)
    en((xs[4] + 3, ys[-1] + 20), "Total", 9); en((xs[5] + 3, ys[-1] + 20), str(tot), 9); en((xs[7] + 3, ys[-1] + 20), str(tot), 9)
    en((40, 540), "Generated by Seller Center  -  demo data, not a real order", 7, color=(.5, .5, .5))
    doc.save(path); return path


def render(pdf, png):
    """第 1 頁整頁 2 倍；另外存一張只留表頭＋表格的近照（_crop，2.6 倍）。"""
    page = pymupdf.open(pdf)[0]
    page.get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False).save(png)
    page.get_pixmap(matrix=pymupdf.Matrix(2.6, 2.6), clip=pymupdf.Rect(16, 14, 826, 352), alpha=False).save(png.replace(".png", "_crop.png"))


F = lambda n: os.path.join(FILES, n)                                    # noqa: E731
f_po1 = purchase_xlsx(F("PurchaseOrder_20261116.xlsx"), QTY_OLD)
f_po2 = purchase_xlsx(F("PurchaseOrder_20261116(1).xlsx"), QTY_NEW)
f_ec, f_lots = ec_xls(F("全商品_20261116.xls")), lots_xlsx(F("竹運庫存效期表_1116.xlsx"))
f_pdf = po_pdf(F(f"678050_{PO_B}_PO.pdf"))
f_pg = price_xlsx(F("PG價格本整合.xlsx"), "價格本整合", [("4900000100017C", "包", B[0][2], 4), ("4900000100024C", "包", B[1][2], 12), ("4900000100031P", "瓶", B[2][2], 24),
                                                        ("4900000100048P", "瓶", "飛柔 去屑洗髮乳 750ml", 12)])
f_paper = price_xlsx(F("紙潔價格本整合.xlsx"), "紙品價格本", [("1022248C", "包", A1[0][2], 8), ("1031507C", "包", A1[1][2], 6), ("1045012P", "瓶", A1[2][2], 6),
                                                            ("1052366C", "包", A2[0][2], 8), ("1060419P", "瓶", A2[1][2], 12)])

# ── 開系統、先灌不是重點的參考資料（價格本、瑪氏商品總表、竹運商品主檔、印章）──
s = Session("shopee"); tc = s.tc
for url, path in (("/api/shopee/conv/import", f_pg), ("/api/shopee/conv/import", f_paper), ("/api/shopee/drop", mars_xlsx(F("自動化_Mars整合商品資料.xlsx"))),
                  ("/api/shopee/stock/import", life_xlsx(F("產品基本資料.xlsx"))), ("/api/momo/stamp", stamp_png(F("stamp.png")))):
    r = s.upload(url, path)
    assert r.status_code == 200, (url, path, r.get_data(as_text=True)[:300])

pg = s.open()
W = pg.wait_for_timeout


BOX_JS = """sels => { let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, miss = [];
  for (const s of sels) { const e = document.querySelector(s); const r = e && e.getBoundingClientRect();
    if (!e || (!r.width && !r.height) || r.bottom <= 0 || r.top >= innerHeight) { miss.push(s); continue; }
    x0 = Math.min(x0, r.left); y0 = Math.min(y0, r.top); x1 = Math.max(x1, r.right); y1 = Math.max(y1, r.bottom); }
  return { miss, box: [Math.max(0, x0), Math.max(0, y0), Math.min(1440, x1), Math.min(810, y1)] }; }"""
FRAMES = []


def mark(id, focus=None, **kw):
    W(550); s.mark(id, focus, **kw)
    r = pg.evaluate(BOX_JS, focus or [])
    if r["miss"]:
        print(f"  [警告] mark {id} 的 focus 不在畫面上：{r['miss']}")
    x0, y0, x1, y1 = r["box"]; FRAMES.append((id, focus, [round(v) for v in r["box"]]))
    if DBG:                                                   # 鏡頭算法照 deck.js 的 zoomFor／aim（視窗寬 1524、pad 26、最多拉近 2.1 倍）
        n = len(s._marks); s.shot(os.path.join(DBG, f"{n:02d}_{id}.png"))
        for tag, vh in (("a", 330), ("b", 556)):
            vw = 1524; base = vw / 1440; z = max(base, min(vw / (x1 - x0 + 52), vh / (y1 - y0 + 52), base * 2.1))
            cx = max(0, min(1440 - vw / z, (x0 + x1) / 2 - vw / z / 2)); cy = max(0, min(810 - vh / z, (y0 + y1) / 2 - vh / z / 2))
            pg.screenshot(path=os.path.join(DBG, f"cam{tag}_{n:02d}_{id}.png"), clip={"x": cx, "y": cy, "width": vw / z, "height": vh / z})


def stage(k):
    s.click(f"#stages .st[data-s='{k}']"); pg.wait_for_selector(f"#stages .st.on[data-s='{k}']", timeout=10000); W(700)


def count(k):
    return int(pg.inner_text(f"#stages .st[data-s='{k}'] .n").replace(",", ""))


def no_preview():
    pg.wait_for_function("document.querySelectorAll('.pv').length === 0", timeout=10000)


# ── 第 1 站 匯入訂單 ─────────────────────────────────────────────────────
pg.goto(s.base + "/shopee"); pg.wait_for_selector("#stages .st.on", timeout=15000); pg.wait_for_selector("#fresh span", timeout=10000)
pg.mouse.move(720, 520); W(900)
mark("s1_start", [".dzbox", "#stages"])
s.move_to(".dzbox", dx=.3)
mark("s1_drop", [".dzbox"], file=os.path.basename(f_po1))
pg.set_input_files("#file", f_po1); pg.wait_for_selector(".pv .ok", timeout=15000)
assert "新增 8 項" in pg.inner_text(".pv").replace("\n", " "), pg.inner_text(".pv")[:300]
mark("s1_preview", [".pv"])
W(600)
s.click(".pv .ffl[data-l='紙潔'] .ff[data-f='供應商直送']"); W(300)
s.click(".pv .ffl[data-l='寶僑'] .ff[data-f='竹運出貨']")
assert not pg.is_disabled(".pv .ok")
mark("s1_fulfil", [".pv .fulfil b", ".pv .ffl[data-l='紙潔'] .ff[data-f='供應商直送']", ".pv .ok"])
s.click(".pv .ok"); no_preview(); pg.wait_for_selector("#tbl tr.og", timeout=10000); W(600)
assert (count("buy"), count("ship"), count("all")) == (2, 1, 3), pg.inner_text("#stages")
s.move_to("#stages .st[data-s='buy'] .t", dx=.8)
mark("s1_done", ["#stages", "#sum"])
W(900)

# ── 第 2 站 比對差異：蝦皮改了數量，同一份採購單重新下載再傳一次 ──────────
s.move_to(".dzbox", dx=.3)
mark("s2_drop", [".dzbox"], file=os.path.basename(f_po2))
pg.set_input_files("#file", f_po2); pg.wait_for_selector(".pv .ok", timeout=15000)
assert "跟上一版有 1 處不同" in pg.inner_text(".pv"), pg.inner_text(".pv")[:400]
s.move_to(".pv .al-bad", dx=.25)
mark("s2_preview", [".pv .facts + .facts", ".pv .al-bad", ".pv .tbl-wrap"])
W(700)
s.click(".pv .ok"); no_preview(); W(700)
assert count("diff") == 1, pg.inner_text("#stages")
stage("diff"); pg.wait_for_selector("#tbl tr.og button.dd", timeout=10000); W(500)
s.click("#tbl tr.og button.dd"); pg.wait_for_selector("#dd-body table", timeout=8000)
assert str(QTY_OLD) in pg.inner_text("#dd-body") and "-40" in pg.inner_text("#dd-body")
s.move_to("#dd-body tbody tr", dx=.55)
mark("s2_diff", ["#dlg-diff", "#dd-body table"])
W(900)
s.click("#dd-confirm"); pg.wait_for_function("!document.querySelector('#dlg-diff').open", timeout=8000); W(900)
assert count("diff") == 0, pg.inner_text("#stages")
s.move_to("#stages .st[data-s='diff'] .t", dx=.9)
mark("s2_done", ["#stages", "#sum"])
W(700)

# ── 第 3 站 產出採購單 ───────────────────────────────────────────────────
stage("buy"); pg.wait_for_selector("#b-tbl tr.og", timeout=10000)
assert pg.inner_text("#b-tbl").count("可產出") == 2, pg.inner_text("#b-tbl")
s.click("#b-all"); W(400)
s.move_to("#b-go")
mark("s3_list", ["#b-tbl", "#b-go"])
with pg.expect_download(timeout=20000) as dl:
    pg.click("#b-go")
eip_zip = dl.value.suggested_filename
pg.wait_for_function("document.querySelector('#stages .st[data-s=\"eip\"] .n').innerText.trim() === '1'", timeout=10000); W(400)
assert count("buy") == 0, pg.inner_text("#stages")
s.move_to("#stages .st[data-s='eip'] .t", dx=.8)
mark("s3_done", ["#stages .st[data-s='buy']", "#stages .st[data-s='eip']", "#toasts .toast"])
W(900)

# ── 第 4 站 回填 EIP 採購單號 ─────────────────────────────────────────────
stage("eip"); pg.wait_for_selector("#e-tbl input.e-po", timeout=10000)
eip_file = pg.inner_text("#e-tbl a.lnk")
s.move_to("#e-tbl a.lnk")
mark("s4_list", ["#e-tbl"])
s.type("#e-tbl input.e-po", EIP_PO)
mark("s4_typed", ["#e-tbl input.e-po", "#e-tbl button.e-save"])
s.click("#e-tbl button.e-save"); pg.wait_for_function("document.querySelector('#toasts').innerText.includes('已回填 EIP 採購單號')", timeout=8000); W(900)
assert count("eip") == 0, pg.inner_text("#stages")
s.click("#e-all"); pg.wait_for_selector("#e-tbl a[href$='/direct_po']", timeout=8000); W(300)
s.move_to("#e-tbl a[href$='/direct_po']")
mark("s4_done", ["#e-tbl", "#e-direct"])
with pg.expect_download(timeout=20000) as dl:
    pg.click("#e-tbl a[href$='/direct_po']")
direct_name = dl.value.suggested_filename
W(900)

# ── 第 5 站 核對缺貨：丟今天的 EC 即時庫存、竹運庫存效期表 → 可出貨量 → 產拋單檔 ──
stage("ship"); pg.wait_for_selector("#z-tbl tr.og", timeout=10000)
assert "庫存資料未上傳" in pg.inner_text("#z-tbl"), pg.inner_text("#z-tbl")
W(500)
s.move_to(".dzbox", dx=.3)
mark("s5_drop", [".dzbox"], file=os.path.basename(f_ec), files=[os.path.basename(f_ec), os.path.basename(f_lots)])
pg.set_input_files("#file", [f_ec, f_lots])
pg.wait_for_function("document.querySelector('#z-tbl').innerText.includes('缺貨（刪單')", timeout=15000); W(700)
s.click("#z-tbl tr.og .tog"); pg.wait_for_selector("#z-tbl tr.sub table.it-sub tbody tr", timeout=10000)
sub = pg.inner_text("#z-tbl tr.sub")
assert "庫存不足" in sub and "效期不足" in sub, sub
s.move_to("#z-tbl tr.sub table.it-sub tbody tr", nth=1, dx=.5)     # 2026-11-20 版品項表多一欄「差額」，各欄往左移；.6 會讓游標壓在「120」上，改停在品名和數量中間的空白
mark("s5_result", ["#z-tbl"])
W(1000)
s.click("#z-tbl input.z-ck"); W(300)
s.move_to("#z-go")
with pg.expect_download(timeout=20000) as dl:
    pg.click("#z-go")
ship_zip = dl.value.suggested_filename
pg.wait_for_function("document.querySelector('#toasts').innerText.includes('已產出拋單檔')", timeout=10000); W(500)
assert (count("ship"), count("notify")) == (0, 1), pg.inner_text("#stages")
s.move_to("#stages .st[data-s='notify'] .t", dx=.8)
mark("s5_ship", ["#stages .st[data-s='ship']", "#stages .st[data-s='notify']", "#toasts .toast"])
W(900)

# ── 第 6 站 標示單據與通知 ───────────────────────────────────────────────
stage("notify"); pg.wait_for_selector(f"#k-tbl tr.og[data-k='{PO_B}']", timeout=10000)
s.click("#k-tbl input.k-ck"); W(300)
s.move_to("#k-go")
mark("s6_notify_list", ["#k-tbl", "#k-go"])
pg.once("dialog", lambda d: d.accept())
pg.click("#k-go"); pg.wait_for_selector("#dlg-notify[open] #dn-msgs textarea", timeout=10000); W(500)
line_text = [pg.input_value("#dn-msgs textarea.dn-text >> nth=%d" % i) for i in range(pg.locator("#dn-msgs textarea.dn-text").count())]
s.move_to("#dn-msgs textarea.dn-text", dx=.4, dy=.4)
mark("s6_notify", ["#dn-msgs .pv"])
W(600)
s.click("#dn-msgs button.dn-copy"); W(900)
s.click("#dlg-notify .x"); pg.wait_for_function("!document.querySelector('#dlg-notify').open", timeout=8000); W(1200)
stage("all"); pg.wait_for_selector(f"#tbl tr.og[data-k='{PO_B}']", timeout=10000)
s.move_to(".dzbox", dx=.3); W(500)
t_drop = s.events[-1]["timestamp"]
with pg.expect_download(timeout=20000) as dl:
    pg.set_input_files("#file", f_pdf)
    pg.wait_for_function("[...document.querySelectorAll('.toast')].some(t => t.innerText.includes('的蝦皮採購單'))", timeout=15000)
drawn_name = dl.value.suggested_filename; f_drawn = F(drawn_name); dl.value.save_as(f_drawn)
toast_pdf = pg.inner_text("#toasts .toast.warn")
W(300); s.move_to("#toasts .toast.warn", dx=.4, dy=.7); W(2000)
s.click("#toasts .toast.warn"); W(300)                        # 這種提示要點一下才收
s.click(f"#tbl tr.og[data-k='{PO_B}'] .fn"); pg.wait_for_selector("#side a.sd-podl", timeout=10000)
pg.locator("#side a.sd-podl").first.scroll_into_view_if_needed(); W(500)
CARD = "#side .sd-sec:has(a.sd-podl)"
pdf_card = pg.inner_text(CARD)
s.move_to("#side a.sd-podl")
mark("s6_pdf", [CARD], file=os.path.basename(f_pdf))
t_card = s.events[-1]["timestamp"]
W(1500)

total = (s.events[-1]["timestamp"] - s.events[0]["timestamp"]) / 1000
s.save("shopee"); s.close()

# ── 第 6 站的靜態圖：原本的採購單、系統畫好的採購單 ────────────────────────
os.makedirs(os.path.join(DECK, "img"), exist_ok=True)
render(f_pdf, os.path.join(DECK, "img", "shopee_pdf_before.png")); render(f_drawn, os.path.join(DECK, "img", "shopee_pdf_after.png"))
print("\n各記號的 focus 與那一刻的範圍 [x0, y0, x1, y1]：")
for id, focus, box in FRAMES:
    print(f"  {id:<15} {box}  {focus}")
if DBG:                                                       # 鏡頭預覽拼成兩張長圖，方便一次看完
    from PIL import Image
    for tag in "ab":
        ims = [Image.open(os.path.join(DBG, f)) for f in sorted(os.listdir(DBG)) if f.startswith("cam" + tag)]
        ims = [im.resize((1000, round(im.height * 1000 / im.width))) for im in ims]
        for part in range(0, len(ims), 7):
            grp = ims[part:part + 7]; sheet = Image.new("RGB", (1000, sum(im.height + 8 for im in grp)), "#444"); y = 0
            for im in grp:
                sheet.paste(im, (0, y)); y += im.height + 8
            sheet.save(os.path.join(DBG, f"sheet_{tag}{part // 7 + 1}.png"))

print(f"\n總長 {total:.1f} 秒")
print("EIP zip:", eip_zip, "｜EIP 檔:", eip_file, "｜直送採購單:", direct_name)
print("拋單檔 zip:", ship_zip, "｜畫好的 PDF:", drawn_name)
print("PDF 提示:", toast_pdf.replace("\n", " / "))
print(f"s6_pdf 往前 {(t_card - t_drop) / 1000:.1f} 秒是丟 PDF 的那一刻")
print("PDF 卡片:", pdf_card.replace("\n", " / ")[:300])
print("品項明細:", sub.replace("\n", " | ").replace("\t", " "))
for i, t in enumerate(line_text):
    print(f"── LINE 第 {i + 1} 則 ──\n{t}")

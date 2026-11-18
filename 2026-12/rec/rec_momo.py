"""MOMO 訂單管理（/momo）一整天的示範錄影：六站一口氣錄完，存成 deck/rec/momo.json。
另外把系統畫好的入庫通知單存成兩張圖：deck/img/momo_notice_before.png、momo_notice_after.png。

全部是假資料（單號、數量、品名、印章都是編的）；瑪氏商品總表拿 repo 裡那份假的再加三個假品項。

三張入庫單：-1001、-1002 是瑪氏（原廠直出：產 EIP → 回填 → 勇信表核缺貨 → 畫入庫通知單）；
-1003 是組合品（AAA 開頭的料號，系統匯入時就定成竹運出貨，不產 EIP），走「待產拋單檔」那一格（2026-11-17.5 版新增）：
丟竹運的 EC 即時庫存、庫存效期表 → 系統算出貨量 → 產出拋單檔＋缺貨清單。記號 z_drop、z_list、z_done 就是這一段，
排在 s4_done 之後、s5_drop 之前（跟畫面上格子的順序一樣）。
2026-11-18.10 版重錄：竹運出貨的效期門檻預設改成「同蝦皮特選」，-1003 第二品那批不合格的效期跟著調（見 ZY_LOTS 上面的說明）；
竹運出貨的短出也要畫入庫通知單，所以 -1003 產完拋單檔就進「待畫入庫通知單」，s6_list、s6_done 那一格是兩張（這段只丟 -1001 的通知單，-1003 留著）。
用法：python rec_momo.py          錄影
      python rec_momo.py --dry    只用 API 跑一遍流程、印出每一步結果（不開瀏覽器，用來確認假資料走得通）
"""
import io, json, os, re, sys, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from rec_common import Session, OMS, PROTO, DECK  # noqa: E402

import openpyxl  # noqa: E402
import xlwt  # noqa: E402
import pymupdf  # noqa: E402
from PIL import Image, ImageDraw, ImageFont  # noqa: E402

DRY = "--dry" in sys.argv

# ── 假資料 ───────────────────────────────────────────────────────────────────
ARRIVE, BUY_DAY = "2026/11/20", "2026/11/13"
NO_A, NO_B, NO_C = "26111358-1001", "26111358-1002", "26111358-1003"
PO_A, PO_B = "PO202611168", "PO202611169"
# (商品編號, 單品編號, MOMO 品名, 數量(盒), 商品原廠編號, 保存天數, 入庫最低有效期限)
A_ITEMS = [("13800101", "001", "【喵愛餡】貓點心 化毛配方 60g（12入/盒）", 48, "M69072565_QMN", "540", "2027/07/18"),
           ("13800102", "001", "【喵喵鮮】貓餐包 鮪魚 70g（24入/盒）", 96, "M80676511_QMN", "730", "2027/11/20"),
           ("13800103", "001", "【喵愛餡】貓點心 潔牙配方 60g（12入/盒）", 36, "M69072570_QMN", "540", "2027/07/18"),
           ("13800104", "001", "【喵喵鮮】貓餐包 雞肉 70g（24入/盒）", 48, "M80676520_QMN", "730", "2027/11/20")]
B_ITEMS = [("13800201", "001", "【汪汪嚴選】狗點心 主廚牛肉 4入（12入/盒）", 24, "M66238912_QMN", "730", "2027/11/20"),
           ("13800202", "001", "【汪汪嚴選】狗點心 潔牙骨 4入（12入/盒）", 60, "M66238920_QMN", "730", "2027/11/20")]
# 竹運出貨的那張：三個組合品（料號 AAA 開頭＝在竹運倉組好的，系統一律竹運出貨）。單位代碼 T＝組
C_ITEMS = [("13800301", "001", "【喵喵鮮】貓餐包 綜合口味（6包/組）", 24, "AAAP260301_TNN", "730", "2027/11/20"),
           ("13800302", "001", "【喵愛餡】貓點心 化毛＋潔牙（2包/組）", 36, "AAAP260302_TNN", "540", "2027/07/18"),
           ("13800303", "001", "【汪汪嚴選】狗點心 主廚牛肉（3袋/組）", 48, "AAAP260303_TNN", "730", "2027/11/20")]
# 竹運庫存（假的）。EC 即時庫存：(料號, 單位, 品名, EC可用量)；庫存效期表：(客戶品號＝料號＋單位代碼, 儲位, 可出貨量, 效期, 製造日期)
#   -301 要 24：EC 60、效期合格 60 → 全出
#   -302 要 36：EC 50；兩批，30 組 2027/04/30 到期（不合格）、12 組 2028/02/28（合格）→ 出 12、效期不足 24
#     效期門檻 2026-11-18 版起預設「同蝦皮特選」：到貨日 11/20 ＋ 保存天數 540 × 1/3 ＝ 2027/05/19（-301、-303 是 730 × 1/3 ＝ 2027/07/21）。
#     原本那批是 2027/05/31，舊版拿 MOMO 的入庫最低有效期限 2027/07/18 比；改成 2027/04/30，新舊兩種門檻都不合格。
#   -303 要 48：EC 只有 30 → 出 30、庫存不足 18
ZY_EC = [("AAAP260301", "組", "喵喵鮮 貓餐包 綜合口味 6包組", 60), ("AAAP260302", "組", "喵愛餡 貓點心 化毛＋潔牙 2包組", 50),
         ("AAAP260303", "組", "汪汪嚴選 狗點心 主廚牛肉 3袋組", 30), ("0199001", "箱", "【示範】抽取式衛生紙 100抽x72包", 140), ("0199002", "包", "【示範】廚房紙巾 60抽x6捲", 96)]
ZY_LOTS = [("AAAP260301T", "K-01-02", 60, "20280930", "20261001"),
           ("AAAP260302T", "K-01-05", 30, "20270430", "20251106"), ("AAAP260302T", "K-01-06", 12, "20280228", "20260906"),
           ("AAAP260303T", "K-02-01", 30, "20281015", "20261016"),
           ("0199001R", "P-11-03", 140, "20291031", "20261101"), ("0199002C", "P-12-08", 96, "20290915", "20260916")]
B_QTY_NEW = 36                                   # 第二站：MOMO 把主廚牛肉從 24 盒改成 36 盒
# 勇信實際出的箱數與效期：(瑪氏貨號, 箱數, 效期)。A 的潔牙配方（69072570）沒印＝沒出；鮪魚訂 4 箱只出 3 箱
YX_A = [("69072565", 4, "2028/03/11"), ("80676511", 3, "2028/08/20"), ("80676520", 2, "2028/09/02")]
YX_B = [("66238912", 3, "2028/07/15"), ("66238920", 5, "2028/06/30")]
EXP_A = {"13800101": "2028/03/11", "13800102": "2028/08/20", "13800103": "", "13800104": "2028/09/02"}   # 入庫通知單上印的商品有效日期

HDR = ["項次", "倉別", "到倉日", "採購日", "入庫單號", "入庫預定日期", "確認日期", "採購總量", "延遲訊息", "momo採購備註", "原入庫單號", "列印狀態",
       "課別", "配送溫層", "請採單號", "商品編號", "商品名稱", "單品編號", "單品詳細", "保存天數", "商品有效日期", "入庫最低有效期限", "採購數量",
       "長", "寬", "高", "重量", "商品原廠編號"]


def unsend_xlsx(path, docs):
    """假的 MOMO 未出貨清單（UnsendList）：docs = [(倉別, 入庫單號, [品項…])]。單據層欄位只寫在每張單第一列（真檔就是這樣）。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "Sheet1"; ws.append(HDR)
    for n, (wh, no, items) in enumerate(docs, start=1):
        for k, (prod, item, name, qty, code, days, minexp) in enumerate(items):
            r = dict.fromkeys(HDR, "")
            if k == 0:
                r.update({"項次": str(n), "倉別": wh, "採購日": BUY_DAY, "入庫單號": no, "入庫預定日期": ARRIVE,
                          "採購總量": str(sum(i[3] for i in items)), "原入庫單號": no, "列印狀態": "未列印", "配送溫層": "常溫"})
            r.update({"商品編號": prod, "商品名稱": name, "單品編號": item, "單品詳細": "無", "保存天數": days, "入庫最低有效期限": minexp,
                      "採購數量": str(qty), "商品原廠編號": code})
            ws.append([r[h] for h in HDR])
    wb.save(path); return path


def master_xlsx(path):
    """瑪氏商品總表：repo 裡那份假的，再加三個假品項（讓一張入庫單的四品落在同一份 EIP：同品類、同中標、同單位）。"""
    wb = openpyxl.load_workbook(os.path.join(OMS, "samples", "mars", "fake", "假_瑪氏商品總表.xlsx")); ws = wb["商品表"]
    for mars, brand, name, per_mid, mid, per_box, label, days in [
            ("69072570", "喵愛餡", "【喵愛餡】貓點心 潔牙 60g*12入", 12, 12, 144, "V", 540),
            ("80676520", "喵喵鮮", "【喵喵鮮】貓餐包 雞肉 70g*24入", 1, 24, 24, "V", 730),
            ("66238920", "汪汪嚴選", "【汪汪嚴選】狗點心 潔牙骨 4入*12", 4, 12, 48, "", 730)]:
        for unit, uc, conv in (("箱", "R", 1), ("盒", "Q", mid), ("包", "C", per_box)):
            ws.append([mars, "Petcare", brand, "M" + mars, name, 1680, per_mid, mid, per_box, f"M{mars}{unit}", f"M{mars}{uc}", unit, uc, conv, label, days, "", ""])
    wb.save(path); return path


def price_xlsx(path):
    """假的紙潔價格本（只是讓上傳區右邊不要亮「未上傳」的黃燈）。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "紙品價格本"; ws.append(["料號", "單位", "品名", "料號3", "箱入數"])
    for code3, unit, name, box in [("0199001R", "箱", "【示範】抽取式衛生紙 100抽x72包", 1), ("0199002C", "包", "【示範】廚房紙巾 60抽x6捲", 8)]:
        ws.append([code3[:-1], unit, name, code3, box])
    wb.save(path); return path


def ec_xls(path):
    """假的竹運 EC 即時庫存（全商品_yyyymmdd.xls，舊版 Excel；欄位照 rec_shopee.ec_xls）。"""
    wb = xlwt.Workbook(); sh = wb.add_sheet("全商品")
    for j, h in enumerate(["結餘日期", "料號", "單位", "品名", "EC可用量"]):
        sh.write(0, j, h)
    for i, row in enumerate(ZY_EC, start=1):
        for j, v in enumerate(("2026/11/18",) + row):
            sh.write(i, j, v)
    wb.save(path); return path


def lots_xlsx(path):
    """假的竹運庫存效期表（欄位照 rec_shopee.lots_xlsx）。"""
    wb = openpyxl.Workbook(); ws = wb.active; ws.title = "sheet1"
    ws.append(["儲區", "客戶品號", "儲位", "可出貨量", "庫存量", "效期", "製造日期"])
    for code, loc, qty, exp, mfg in ZY_LOTS:
        ws.append(["良品區", code, loc, qty, qty, exp, mfg])
    wb.save(path); return path


def stamp_png(path):
    """假的業務專用章：紅色圓角框、兩行字，稍微歪一點。"""
    W, H = 520, 300; red = (200, 24, 36)
    im = Image.new("RGB", (W, H), "white"); d = ImageDraw.Draw(im)
    d.rounded_rectangle((14, 14, W - 14, H - 14), radius=34, outline=red, width=14)
    d.rounded_rectangle((38, 38, W - 38, H - 38), radius=20, outline=red, width=4)
    f1 = ImageFont.truetype("/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc", 58); f2 = ImageFont.truetype("/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc", 86)
    for text, f, y in (("示範商行（假）", f1, 92), ("業務專用章", f2, 190)):
        w = d.textlength(text, font=f); d.text(((W - w) / 2, y), text, font=f, fill=red, anchor="lm")
    im = im.rotate(-4, resample=Image.BICUBIC, expand=True, fillcolor="white")
    im.save(path); return path


def yx_pdf(path, pages):
    """假的勇信配送明細表（文字排法照 test_momo.yx_pdf）：pages = [(EIP 單號, 倉, [(瑪氏貨號, 箱數, 效期)])]。"""
    doc = pymupdf.open()
    for eip, wh, items in pages:
        lines = ["桃園市觀音區", "BMS100230-示範商店-momo", "出貨廠商名稱：A5888-示範瑪氏供應商（假資料）", "指送日期：2026/11/19",
                 "配 送 明 細 表(預排鮮度)", "產品編號", "產品名稱", "入數", "配送數量", f"收貨單號：{eip}-momo-{wh}"]
        for n, (code, q, exp) in enumerate(items, start=1):
            lines += [f"58880{code}", str(n), f"假品名 {code} 1:12:1", f"{q}C  ", "625D1TAP01", exp]
        lines += ["備註:momo嘜頭+入倉單", "單據金額:", f"合計箱數:{sum(q for _c, q, _e in items)}", "客戶簽章:"]
        page = doc.new_page(); y = 40
        for ln in lines:
            page.insert_text((40, y), ln, fontname="china-t", fontsize=9); y += 14
    doc.save(path); return path


def notice_pdf(path, no, wh, items, exps):
    """假的 MOMO 入庫通知單。表格畫法照 test_momo.notice_pdf（一格一格的矩形、同樣的欄位 x 座標、列高 49），
    另外補上表頭資訊、品名、簽章欄，看起來像一張真的表單；parse_notice 認的東西（通知單號、商品編碼表頭、數量／商品有效兩欄）都在。"""
    doc = pymupdf.open(); page = doc.new_page(width=595, height=842)

    def T(x, y, t, size=9, color=(0, 0, 0)):
        """中文用內建的 china-t、英數用 helv（china-t 的英數是全形寬，會擠出格子），一段一段接著畫。"""
        for run in re.findall(r"[\x20-\x7e]+|[^\x20-\x7e]+", t):
            font = "helv" if run.isascii() else "china-t"
            page.insert_text((x, y), run, fontname=font, fontsize=size, color=color)
            x += pymupdf.get_text_length(run, fontname=font, fontsize=size)
    T(246, 52, "入庫通知單", 20)
    page.draw_line((43.5, 62), (551.5, 62), color=(0, 0, 0), width=1.2)
    T(63, 84, f"通知單號: {no}", 10); T(300, 84, f"入庫倉別: momo-{wh}", 10)
    T(63, 102, f"採購日期: {BUY_DAY}"); T(300, 102, f"入庫預定日期: {ARRIVE}")
    T(63, 118, "供應商: 示範供應商（假資料）"); T(300, 118, "配送溫層: 常溫　　課別: 寵物用品")
    T(63, 134, "列印日期: 2026/11/18 15:20"); T(300, 134, "頁次: 1 / 1")
    xs = [43.5, 109.3, 135.6, 188.3, 254.1, 301.5, 348.8, 383.0, 417.3, 443.6, 469.9, 483.1, 496.2, 509.4, 551.5]
    heads = ["商品編碼", "單品", "原廠編號", "商品名稱", "單品詳細", "保存天數", "最低效期", "分類", "單位", "數量", "註", "備", "檢", ["商品有效", "日期"]]

    def row(y0, y1, texts, fill=None, sizes=None, top=None):
        for k in range(len(xs) - 1):
            page.draw_rect(pymupdf.Rect(xs[k], y0, xs[k + 1], y1), color=(0, 0, 0), width=0.5, fill=fill)
            cell = texts[k]
            for j, t in enumerate(cell if isinstance(cell, (list, tuple)) else [cell]):
                if t:
                    T(xs[k] + 3, y0 + (top or {}).get(k, 14) + j * 10, t, (sizes or {}).get(k, 7))
    row(160, 200, heads, fill=(0.93, 0.93, 0.93))
    y = 200
    for prod, item, name, qty, code, days, minexp in items:
        lines, cur = [], ""
        for part in name.replace("（", " （").split(" "):       # 品名照欄寬折成幾行
            if cur and len(cur) + len(part) > 8:
                lines.append(cur); cur = part
            else:
                cur += part
        lines.append(cur)
        row(y, y + 49, [prod, item, [code[:9], code[9:]], lines[:4], "無", days, minexp, "寵物", "盒", str(qty), "", "", "", exps.get(prod, "")],
            sizes={9: 11, 3: 6.5, 6: 6, 13: 7.5}, top={9: 25})
        y += 49
    row(y, y + 16, ["", "", "", "總合", "", "", "", "", "", str(sum(i[3] for i in items)), "", "", "", ""], top={3: 11, 9: 11})
    y += 46
    T(63, y, "注意事項：", 8)
    for k, t in enumerate(["1. 請依入庫預定日期進貨，並於外箱貼妥嘜頭。", "2. 實際出貨數量與本單不符者，請於「數量」欄更正並加蓋業務專用章。",
                           "3. 不出貨之品項請整列劃除，並於「商品有效日期」欄加蓋業務專用章。"]):
        T(63, y + 14 + k * 13, t, 8)
    y += 86
    for x, t in ((63, "廠商簽章："), (240, "司機簽章："), (410, "倉庫驗收：")):
        T(x, y, t, 9); page.draw_line((x + 48, y + 2), (x + 130, y + 2), color=(0, 0, 0), width=0.6)
    T(63, 812, "※ 簡報示範用假資料，非真實單據。", 7, (0.45, 0.45, 0.45))
    doc.save(path); return path


def render(pdf_path, png_path, zoom=2.0, clip=None):
    doc = pymupdf.open(pdf_path)
    doc[0].get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), clip=clip, alpha=False).save(png_path)


# ── 開機、灌參考資料（不進錄影）──────────────────────────────────────────────
s = Session("momo_dry" if DRY else "momo")
tc = s.tc
IN = os.path.join(s.data, "in"); os.makedirs(IN, exist_ok=True)
f = lambda n: os.path.join(IN, n)  # noqa: E731
F1 = unsend_xlsx(f("UnsendList_1.xlsx"), [("DC6", NO_A, A_ITEMS), ("DC6", NO_C, C_ITEMS)])      # 一份下載檔裡兩張入庫單：瑪氏那張＋組合品那張
F2 = unsend_xlsx(f("UnsendList_2.xlsx"), [("SDC", NO_B, B_ITEMS)])
B_NEW = [B_ITEMS[0][:3] + (B_QTY_NEW,) + B_ITEMS[0][4:], B_ITEMS[1]]
F2B = unsend_xlsx(f("UnsendList_2_重新下載.xlsx"), [("SDC", NO_B, B_NEW)])
FEXP = unsend_xlsx(f("UnsendList_效期匯入.xlsx"), [("DC6", NO_A, A_ITEMS), ("SDC", NO_B, B_NEW)])
FEC, FLOTS = ec_xls(f("全商品_20261118.xls")), lots_xlsx(f("竹運庫存效期表_1118.xlsx"))
FYX = yx_pdf(f("勇信配送明細表_1119.pdf"), [(PO_A, "DC6", YX_A), (PO_B, "SDC", YX_B)])
FNT = notice_pdf(f(f"入庫通知單_{NO_A}.pdf"), NO_A, "DC6", A_ITEMS, EXP_A)
r = s.upload("/api/mars/products/import", master_xlsx(f("假_瑪氏商品總表.xlsx"))); assert r.status_code == 200, r.get_json()
r = s.upload("/api/shopee/conv/import", price_xlsx(f("假_紙潔價格本整合.xlsx"))); assert r.status_code == 200, r.get_json()
r = s.upload("/api/momo/stamp", stamp_png(f("假_業務專用章.png"))); assert r.status_code == 200, r.get_json()
IMG = os.path.join(DECK, "img"); os.makedirs(IMG, exist_ok=True)
DRAWN = f(f"入庫通知單_{NO_A}_已畫.pdf")


def stills():
    render(FNT, os.path.join(IMG, "momo_notice_before.png")); render(DRAWN, os.path.join(IMG, "momo_notice_after.png"))
    clip = pymupdf.Rect(36, 150, 559, 420)               # 表格那一塊放大，簡報要拉近時用
    render(FNT, os.path.join(IMG, "momo_notice_before_crop.png"), 4, clip); render(DRAWN, os.path.join(IMG, "momo_notice_after_crop.png"), 4, clip)
    print("stills →", IMG)


def eip_ids():
    """{倉別: EIP id}（每個倉一份）。"""
    return {e["warehouse"]: e["id"] for e in tc.get("/api/momo/eips").get_json()["eips"]}


if DRY:
    up = lambda url, paths: tc.post(url, data={"file": [(io.BytesIO(open(p, "rb").read()), os.path.basename(p)) for p in paths]}, content_type="multipart/form-data")  # noqa: E731
    stages = lambda: {x["key"]: x["count"] for x in tc.get("/api/momo/orders").get_json()["stages"]}  # noqa: E731
    pv = up("/api/momo/import/preview", [F1, F2]).get_json(); print("preview", pv["counts"], pv["lines"], pv.get("warnings"), pv.get("errors"))
    tc.post("/api/momo/import/commit", json={"upload_id": pv["upload_id"]}); print("stages", stages())
    pv = up("/api/momo/import/preview", [F2B]).get_json(); print("preview2", pv["counts"], pv["diffs"])
    tc.post("/api/momo/import/commit", json={"upload_id": pv["upload_id"]}); print("stages", stages())
    plan = tc.get("/api/momo/purchase/plan").get_json()["orders"]
    print("plan", [(g["inbound_no"], g["blocking"], g.get("boxes"), [(x["factory_code"], x["problems"]) for x in g["items"]]) for g in plan])
    tc.post("/api/momo/diffs/confirm", json={"inbound_nos": [NO_B]})
    plan = tc.get("/api/momo/purchase/plan").get_json()["orders"]
    print("plan", [(g["inbound_no"], g["blocking"], g.get("boxes"), [(x["factory_code"], x["out_qty"], x["conv"], x["problems"]) for x in g["items"]]) for g in plan])
    r = tc.post("/api/momo/purchase/generate", json={"inbound_nos": [NO_A, NO_B]}); print("gen", r.status_code, r.headers.get("X-Momo-Files"), stages())
    eips = tc.get("/api/momo/eips").get_json()["eips"]; print([(e["id"], e["filename"], e["warehouse"], e["rows"], e["boxes"], e["orders"]) for e in eips])
    ids = eip_ids()
    print(tc.put(f"/api/momo/eips/{ids['DC6']}", json={"eip_po": PO_A}).get_json(), tc.put(f"/api/momo/eips/{ids['SDC']}", json={"eip_po": PO_B}).get_json(), stages())
    zplan = lambda: [(g["inbound_no"], g["lines"], g["need"], g["ship"], g["short"], g["blocking"], g["dispatch_status"],          # noqa: E731
                      [(x["code"], x["unit"], x["need"], x["ec"], x["qualified"], x["final"], x["short"], x["reasons"], x["alloc"], x["threshold"], x["threshold_src"], x["problems"]) for x in g["items"]])
                     for g in tc.get("/api/momo/ship/plan").get_json()["orders"]]
    print("zy 還沒丟庫存", zplan())
    print("kinds", up("/api/momo/kinds", [FEC, FLOTS]).get_json())
    for p_ in (FEC, FLOTS):
        r = s.upload("/api/shopee/stock/import", p_); print("stock", r.status_code, {k: v for k, v in r.get_json().items() if k != "stock"})
    print("zy 丟了庫存", json.dumps(zplan(), ensure_ascii=False))
    r = tc.post("/api/momo/ship/generate", json={"inbound_nos": [NO_C]})
    print("zy gen", r.status_code, r.headers.get("Content-Disposition"), r.headers.get("X-Momo-Orders"), r.headers.get("X-Momo-Short"),
          zipfile.ZipFile(io.BytesIO(r.data)).namelist() if r.status_code == 200 else r.get_json(), stages())
    print("zy 產出後", json.dumps(zplan(), ensure_ascii=False))
    print("kinds", up("/api/momo/kinds", [FYX, FNT, FEXP]).get_json())
    d = up("/api/momo/yx", [FYX]).get_json(); print("yx", json.dumps(d, ensure_ascii=False))
    for no in (NO_A, NO_B):
        for x in tc.get(f"/api/momo/check?no={no}").get_json()["orders"][0]["items"]:
            print("  ", no, x["factory_code"], x["ordered"], x["shipped"], x["status"], x["decision"], x["expiry"], x["why"])
            if x["decision"] == "pending":
                tc.post("/api/momo/check", json={"order_id": x["order_id"], "ship": 1, "expiry": x["expiry"]})
    r = up("/api/momo/expfill", [FEXP]); print("expfill", r.status_code, r.headers.get("X-Momo-Filled"), r.get_json() if r.status_code != 200 else "", stages())
    d = up("/api/momo/notice", [FNT]); print("notice", d.status_code, json.dumps(d.get_json(), ensure_ascii=False))
    r = tc.get(f"/api/momo/notice/{NO_A}/file"); print("drawn", r.status_code, r.headers.get("X-Momo-Drawn"), r.headers.get("X-Momo-Stamp"), r.headers.get("Content-Disposition"), stages())
    open(DRAWN, "wb").write(r.data); stills()
    sys.exit(0)


# ── 錄影 ─────────────────────────────────────────────────────────────────────
LIVE = os.path.join(HERE, "check", "momo_live"); os.makedirs(LIVE, exist_ok=True)
pg = s.open()
W = pg.wait_for_timeout
ROW = lambda no: f"#tbl tr.og[data-no='{no}']"  # noqa: E731


def mark(id, focus, **kw):
    """記號之前先讓游標在原地動一點點：剛剛點的東西如果被畫面換掉了，重播跳到這個記號時游標才會停在對的位置。"""
    xy = pg.evaluate("window.__mxy || null")
    if xy:
        pg.mouse.move(xy[0] + 3, xy[1] + 2, steps=3)
    W(650); s.mark(id, focus=focus, **kw); s.shot(os.path.join(LIVE, id + ".png"))


def drop(id, paths, focus, shown=None, **kw):
    """游標移到上傳區 → 記號 → 把檔案交給上傳入口（等於拖進去）。"""
    s.move_to(".dzbox", dx=.22, dy=.5); W(300)
    mark(id, focus, file=shown or "、".join(os.path.basename(p) for p in paths), **kw); W(700)
    pg.set_input_files("#file", paths)


pg.goto(s.base + "/momo"); pg.wait_for_selector("#stages .st", timeout=15000)
pg.evaluate("document.addEventListener('mousemove', e => { window.__mxy = [e.clientX, e.clientY]; }, true)")
pg.mouse.move(760, 330); W(900)

# 第一站 匯入訂單：一次丟兩個 MOMO 下載檔 → 合在一起預覽 → 確認匯入
mark("s1_start", [".dzbox", "#stages"]); W(1200)
drop("s1_drop", [F1, F2], [".dzbox"])
pg.wait_for_selector(".pv [data-a=ok]", timeout=15000); W(400)
mark("s1_preview", [".pv"]); W(1800)
s.click(".pv [data-a=ok]"); pg.wait_for_function("document.querySelectorAll('#tbl tr.og').length === 2", timeout=15000); W(500)
mark("s1_done", ["#stages", "#tbl"]); W(2600)

# 第二站 比對差異：MOMO 把一品從 24 盒改成 36 盒，重新下載再丟一次
drop("s2_drop", [F2B], [".dzbox"])
pg.wait_for_selector(".pv [data-a=ok]", timeout=15000); W(400)
mark("s2_preview", [".pv"]); W(2200)
s.click(".pv [data-a=ok]"); pg.wait_for_selector(f"{ROW(NO_B)}.blk", timeout=15000); W(1300)
s.click(f"{ROW(NO_B)} td:nth-child(2)"); pg.wait_for_selector("#sd-diff-ok", timeout=10000); W(1600); s.shot(os.path.join(LIVE, "x_s2_diff.png"))      # 點那張單 → 視窗裡列出 MOMO 改了什麼
s.click("#sd-diff-ok"); pg.wait_for_selector("#sd-diff-ok", state="detached", timeout=10000); W(1000)
s.click("#sd-close2"); pg.wait_for_selector("#side", state="hidden", timeout=5000)
pg.wait_for_function("document.querySelectorAll('#tbl tr.og.blk').length === 0", timeout=8000); W(400)
mark("s2_done", ["#stages", ROW(NO_B)]); W(1800)

# 第三站 產出採購單：全選 → 產出 EIP 採購單（壓縮檔）
s.click("#ck-all"); pg.wait_for_selector("#b-go:not([disabled])", timeout=5000); s.move_to("#b-go"); W(200)
mark("s3_list", ["#tbl", "#buy-go"]); W(1200)
with pg.expect_download(timeout=15000) as dl:
    pg.click("#b-go")
print("  EIP 壓縮檔：", dl.value.suggested_filename)
pg.wait_for_selector("#toasts .toast", timeout=8000); pg.wait_for_function("document.querySelectorAll('#tbl tr.og').length === 0", timeout=8000); W(300)
mark("s3_done", ["#stages", "#toasts"]); W(1800)

# 第四站 回填單號：到「待回填 EIP 採購單號」，打 EIP 系統給的號碼
s.click("#stages .st[data-st='eip']"); pg.wait_for_selector("#e-tbl .eip-in", timeout=8000); W(400)
mark("s4_list", ["#stages", "#e-tbl"]); W(1400)
ids = eip_ids()
IN_A, IN_B = (f"#e-tbl .eip-in[data-id='{ids[w]}']" for w in ("DC6", "SDC"))
SV_A, SV_B = (f"#e-tbl .eip-save[data-id='{ids[w]}']" for w in ("DC6", "SDC"))
s.type(IN_A, PO_A); s.move_to(SV_A, dy=.8)
mark("s4_typed", [IN_A, SV_A]); W(900)
s.click(SV_A); pg.wait_for_selector(IN_A, state="detached", timeout=8000); W(900)
s.type(IN_B, PO_B); s.click(SV_B); pg.wait_for_selector(IN_B, state="detached", timeout=8000); W(900)
s.click("#e-all"); pg.wait_for_function(f"document.querySelector('#e-tbl').innerText.includes('瑪氏採購單') && document.querySelectorAll('#e-tbl .eip-in').length === 2", timeout=8000)
s.move_to("#e-tbl .eip-dl", nth=1); W(200)
mark("s4_done", ["#stages", "#e-tbl"]); W(2000)

# 第五站之一 竹運出貨的那張（組合品）：到「待產拋單檔」，丟竹運的 EC 即時庫存、庫存效期表 → 系統照庫存與效期算出貨量 → 勾選、產出拋單檔＋缺貨清單
ZROW = f"#tbl tr.og[data-no='{NO_C}']"
ZST = "#stages .st[data-st='zy']"


def wheel(dy, n=6):
    """用滾輪慢慢捲（一次捲到底重播起來是瞬間跳過去）。"""
    for _ in range(n):
        pg.mouse.wheel(0, dy / n); W(45)
    W(250)


# 先到「全部入庫單」看一眼三張單的狀況（兩張 EIP 已回填、-1003 竹運出貨不用下採），再進「待產拋單檔」。
# 這一下也順便避開系統目前的一個小毛病：從「待產 EIP」→「待回填」直接進「待產拋單檔」，清單下面會多一顆沒收起來的「產出 EIP 採購單」。
s.click("#stages .st[data-st='all']"); pg.wait_for_function("document.querySelectorAll('#tbl tr.og').length === 3", timeout=8000)
assert "竹運出貨" in pg.inner_text(ZROW), pg.inner_text(ZROW)
s.move_to(f"{ZROW} td:nth-child(6)"); W(1100); s.shot(os.path.join(LIVE, "x_z_all.png"))
s.click(ZST); pg.wait_for_selector(f"{ZROW} .zk", timeout=8000)
assert "請先上傳 EC 即時庫存、竹運庫存效期表" in pg.inner_text("#tbl"), pg.inner_text("#tbl")      # 還沒丟庫存檔：三品都擋著
assert not pg.is_visible("#buy-go"), "「產出 EIP 採購單」那顆不該出現在待產拋單檔"
W(900)
drop("z_drop", [FEC, FLOTS], [".dzbox"], files=[os.path.basename(FEC), os.path.basename(FLOTS)])
pg.wait_for_function("(() => { const t = document.querySelector('#tbl').innerText; return t.includes('效期不足') && t.includes('庫存不足') && !t.includes('請先上傳'); })()", timeout=15000)
W(900); s.shot(os.path.join(LIVE, "x_z_toast.png"))
ztxt = pg.inner_text("#tbl"); print("  待產拋單檔：", " / ".join(ztxt.split("\n")))
assert all(k in ztxt for k in ("要出", "EC 可用", "合格效期可出", "出貨量", "結果", "OK", "效期不足 24", "庫存不足 18", "缺 42")), ztxt
pg.mouse.move(700, 560, steps=14); wheel(185)                                                  # 清單在畫面下緣被切掉，往下捲一點（2026-11-18 版這一格的說明多兩行，多捲 35，下面那排「效期門檻」才看得到）
s.move_to(f"{ZROW} + tr + tr td:nth-child(8)", steps=14)
pg.wait_for_selector("#toasts .toast", state="detached", timeout=8000); W(200)
box = pg.locator("#tbl").bounding_box(); assert box["y"] > 0 and box["y"] + box["height"] < 800, box   # 整張清單都在畫面裡
mark("z_list", ["#tbl"]); W(1800)
s.click("#z-show"); pg.wait_for_selector("#z-show.on", timeout=5000)                           # 「顯示已產出」先打開：產出之後這張才會留在清單上（不然就離開這一格了）
s.click(f"{ZROW} .zk"); pg.wait_for_selector("#z-go:not([disabled])", timeout=5000); s.move_to("#z-go"); W(500)
with pg.expect_download(timeout=15000) as dl:
    pg.click("#z-go")
zy_zip = f(dl.value.suggested_filename); dl.value.save_as(zy_zip)
print("  竹運拋單壓縮檔：", dl.value.suggested_filename, zipfile.ZipFile(zy_zip).namelist())
pg.wait_for_function("document.querySelector('#toasts').innerText.includes('已產出 1 張入庫單的拋單檔')", timeout=8000)
pg.wait_for_function(f"document.querySelector(\"{ZST} .n\").innerText.trim() === '0'", timeout=8000); pg.wait_for_selector(f"{ZROW} .z-undo", timeout=8000)
ztxt = pg.inner_text("#tbl"); print("  產出之後：", " / ".join(ztxt.split("\n")))
assert "已產出" in ztxt and "效期不足 24" in ztxt and "庫存不足 18" in ztxt, ztxt
s.move_to(f"{ZROW} td:last-child .badge", steps=18); W(300)
assert pg.is_visible("#toasts .toast")
mark("z_done", [ZST, "#toasts .toast"], table=["#tbl"], made=[f"{ZROW} td:last-child"]); W(1600)   # table／made：想改看清單、或只看「已產出」那一格時可以用的選擇器

# 第五站 核對缺貨與效期：丟勇信配送明細表 → 系統一品一品比 → 短出的那品由人決定照出
s.click("#stages .st[data-st='yx']"); pg.wait_for_function("document.querySelectorAll('#tbl tr.og').length === 2", timeout=8000); W(500)
wheel(-240); assert pg.evaluate("scrollY") == 0                                                # 捲回最上面，之後幾站的畫面位置才跟以前一樣
pg.wait_for_selector("#toasts .toast", state="detached", timeout=10000); W(300)               # 等「已產出拋單檔」的提示消失再丟下一個檔
drop("s5_drop", [FYX], [".dzbox", "#tbl"])
pg.wait_for_selector(".pv h3:has-text('勇信配送明細表')", timeout=15000); pg.wait_for_selector(f"{ROW(NO_A)}.ask", timeout=8000); W(500)
wheel(70, n=4)                                                # 上傳區多了竹運兩顆燈、格子多一格，頁面比以前高：往下捲一點，預覽和兩張單才都在畫面裡
box = pg.locator("#tbl").bounding_box(); top = pg.locator(".pv").bounding_box()["y"]; assert top > 0 and box["y"] + box["height"] < 806, (top, box)
mark("s5_preview", [".pv", "#tbl"]); W(2600)
s.click(".pv [data-a=x]"); W(300)
wheel(-120, n=4); assert pg.evaluate("scrollY") == 0
s.click(f"{ROW(NO_A)} td:nth-child(1)"); pg.wait_for_selector("#sd-items th:has-text('③ 結果')", timeout=10000); W(2400); s.shot(os.path.join(LIVE, "x_s5_pending.png"))
s.click("#sd-items tr.ask [data-ship1]"); pg.wait_for_function("!document.querySelector('#sd-items tr.ask')", timeout=8000); W(1500)   # 訂 4 箱只出 3 箱 → 人決定：照出
s.click("#side .sd-fl[data-f='cut']"); W(1200)                # 只看不出貨／短出的品項
s.move_to("#ck-fill"); W(300)                                 # 填效期：選 MOMO 的效期匯入檔 → 下載填好的
with pg.expect_download(timeout=15000) as dl:
    pg.set_input_files("#ck-file", FEXP)
print("  效期檔：", dl.value.suggested_filename)
pg.wait_for_function("document.querySelector('#sd-title').innerText.includes('待畫入庫通知單')", timeout=8000); W(600)
CARD4 = ".sd-grid > .sd-sec:nth-child(2)"
mark("s5_result", ["#sd-items", f"{CARD4} > .h", f"{CARD4} .b > .sd-it:nth-child(1)", f"{CARD4} .b > .sd-it:nth-child(2)"]); W(3000)
s.click("#sd-close2"); pg.wait_for_selector("#side", state="hidden", timeout=5000); W(900)

# 第六站 標示單據：到「待畫入庫通知單」，丟 MOMO 的入庫通知單 PDF → 系統畫線、改數量、蓋章
s.click("#stages .st[data-st='notice']"); pg.wait_for_selector(ROW(NO_A), timeout=8000); W(400)
assert pg.evaluate("scrollY") == 0
mark("s6_list", ["#stages", "#tbl"]); W(1600)
drop("s6_drop", [FNT], [".dzbox"])
pg.wait_for_selector(".pv a.btn", timeout=15000); pg.wait_for_selector("#tbl a.btn", timeout=8000)
assert pg.locator("#tbl tr.og").count() == 2 and "還沒收到" in pg.inner_text(ROW(NO_C)), pg.inner_text("#tbl")   # 2026-11-18 版：竹運出貨短出的 -1003 也在這一格，這次只丟 -1001 的通知單，它留著
wheel(60, n=4)                                               # 清單現在有兩列，第二列被畫面下緣切掉：往下捲一點
box = pg.locator("#tbl").bounding_box(); top = pg.locator(".pv").bounding_box()["y"]; assert top > 0 and box["y"] + box["height"] < 806, (top, box)
s.move_to(".pv a.btn", dx=.9, dy=.85); W(200)
mark("s6_done", [".pv", "#tbl"]); W(1600)
with pg.expect_download(timeout=15000) as dl:
    pg.locator(".pv a.btn").click()
dl.value.save_as(DRAWN); print("  畫好的入庫通知單：", dl.value.suggested_filename)
W(3200); s.shot(os.path.join(LIVE, "x_end.png"))

print(f"total {(s.events[-1]['timestamp'] - s.events[0]['timestamp']) / 1000:.1f}s")
s.save("momo"); s.close(); stills()

// 每個工具的版面落點刻意不同（layout），避免整頁變成同一個模板重複四次。
// metrics 的 value 先留 null，版面會顯示待補記號，等實際數字出來再填。
export const tools = [
  {
    id: 'sop-search',
    index: '01',
    kicker: '知識檢索',
    name: 'SOP 檢索網站',
    layout: 'lead',
    problem: '同一份出貨流程，資深同事記在腦子裡，新人得翻三個資料夾才找得到。問人最快，但問的人越多，被打斷的人也越多。',
    approach: '把散在各處的 SOP 收斂成一個可搜尋的網站，用關鍵字直接命中步驟，圖文並排，不用再一頁一頁翻。',
    metrics: [
      { label: '查找時間', value: null, unit: '分鐘' },
      { label: '收錄 SOP', value: null, unit: '份' },
      { label: '每週被詢問次數', value: null, unit: '次' },
    ],
    status: '已上線',
  },
  {
    id: 'coupang-oms',
    index: '02',
    kicker: '訂單處理',
    name: '酷澎訂單管理系統',
    layout: 'offset',
    problem: '訂單從後台下載、整理、對帳到出貨，中間隔了好幾個 Excel 檔，每一次複製貼上都是一次出錯的機會。',
    approach: '把整條訂單流程收進同一個系統：抓單、比對、產出貨資料一次到位，各環節的狀態直接看得到。',
    metrics: [
      { label: '單筆處理時間', value: null, unit: '分鐘' },
      { label: '人工轉檔次數', value: null, unit: '次' },
      { label: '測試覆蓋', value: '164', unit: '項通過' },
    ],
    status: '開發中',
  },
];

import OmsFeature from './OmsFeature.jsx';
import { PURCHASE_FEATURE } from '../../data/omsFeatures.js';

// 「額外功能」章的第三頁（前兩頁是驗收單自動簽名）：採購表格式轉換。
// 跟訂單管理系統完全解耦的工具，用 note 帶出「這是獨立模組」這件事。
// 版面維持滿版堆疊：這頁有 4 個操作步驟 + 3 條「做到了什麼」，分欄後的
// 1.6rem 會爆版，而且它沒有影片或截圖可以放右欄。
export default function OmsPurchase({ active }) {
  const { standalone, ...feature } = PURCHASE_FEATURE;
  return <OmsFeature {...feature} note={standalone} railIndex="03" layout="stacked" active={active} />;
}

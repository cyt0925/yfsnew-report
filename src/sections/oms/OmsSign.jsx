import OmsFeature from './OmsFeature.jsx';
import { SIGN_FEATURE } from '../../data/omsFeatures.js';

// 獨立章節（左右鍵切）：驗收單自動簽名。跟酷澎訂單管理系統同一條產品線，
// 但不是往下滑就看得到的步驟，所以拉成自己的一章，用同一套 OmsFeature 模板。
// 版面維持滿版堆疊：第 5 章那五頁已改成左右分欄，這一章沒有跟著改——
// 這頁有 5 條「做到了什麼」，分欄後的 1.6rem 會直接爆出畫面。
export default function OmsSign({ active }) {
  return <OmsFeature {...SIGN_FEATURE} layout="stacked" active={active} />;
}

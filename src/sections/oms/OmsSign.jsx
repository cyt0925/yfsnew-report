import OmsFeature from './OmsFeature.jsx';
import { SIGN_FEATURE } from '../../data/omsFeatures.js';

// 獨立章節（左右鍵切）：驗收單自動簽名。跟酷澎訂單管理系統同一條產品線，
// 但不是往下滑就看得到的步驟，所以拉成自己的一章，用同一套 OmsFeature 模板。
export default function OmsSign({ active }) {
  return <OmsFeature {...SIGN_FEATURE} active={active} />;
}

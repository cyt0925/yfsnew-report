import OmsFeature from './OmsFeature.jsx';
import { PURCHASE_FEATURE } from '../../data/omsFeatures.js';

// 獨立章節（左右鍵切）：採購表格式轉換。跟訂單管理系統完全解耦的工具，
// 拉成自己的一章，用 note 帶出「這是獨立模組」這件事，不用另外做版面。
// 版面維持滿版堆疊，理由同 OmsSign：第 5 章改分欄不含這一章。
export default function OmsPurchase({ active }) {
  const { standalone, ...feature } = PURCHASE_FEATURE;
  return <OmsFeature {...feature} note={standalone} layout="stacked" active={active} />;
}

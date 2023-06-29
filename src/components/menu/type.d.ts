
interface SiderItem {
  key: string;          // 唯一标识
  label: string;        // 文案
  path: string;         // 路径
}

interface MenuItem {
  key: string;          // 唯一标识
  label: string;        // 文案
  path?: string;         // 路径
  siders?: SiderItem[];  // 侧边栏
}

export {
  MenuItem,
}
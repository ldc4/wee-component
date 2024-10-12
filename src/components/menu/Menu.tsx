import React from 'react';
import classNames from 'classnames';

export interface MenuProps {
  mode?: 'vertical' | 'horizontal';
  items: MenuItem[];
  className?: string;
  style?: React.CSSProperties;
  onClick?: Function;
}

export interface SiderItem {
  key: string;          // 唯一标识
  label: string;        // 文案
  path: string;         // 路径
}

export interface MenuItem {
  key: string;          // 唯一标识
  label: string;        // 文案
  path?: string;         // 路径
  siders?: SiderItem[];  // 侧边栏
}

/**
 * 菜单组件
 */
const Menu = (props: MenuProps) => {

  const {
    mode = 'horizontal',
    items,
    className,
    style,
    onClick
  } = props;
  const mergeClassNames = classNames('ve-menu', className);
  const listClassNames = classNames('ve-menu-item-list', mode);
  const menuItemList = items.map((item: MenuItem) => {
    console.log(item.key);
    return (
      <li
        className="ve-menu-item"
        key={item.key}
        onClick={() => { onClick?.(item) }}
      >{item.label}</li>
    );
  });

  return (
    <>
      <div
        className={ mergeClassNames }
        style={{ ...style }}
      >
        <ul className={listClassNames}>
          { menuItemList }
        </ul>
      </div>
    </>
  )
}

export default Menu;

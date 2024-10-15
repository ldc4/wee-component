import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export interface MenuProps {
  mode?: 'vertical' | 'horizontal';
  items: MenuItem[];
  className?: string;
  style?: React.CSSProperties;
  defaultActiveKey?: string;
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
    defaultActiveKey,
    onClick
  } = props;

  const mergeClassNames = classNames('ve-menu', className);
  const listClassNames = classNames('ve-menu-item-list', mode);

  const [activeKey, setActiveKey] = useState(defaultActiveKey || '');

  useEffect(() => {
    setActiveKey(defaultActiveKey || '');
  }, [defaultActiveKey]);

  const menuItemList = items.map((item: MenuItem) => {
    const activeClassName = activeKey === item.key ? 'active' : '';
    const itemClassName = classNames('ve-menu-item', activeClassName);
    const handleMenuClick = () => {
      setActiveKey(item.key);
      onClick?.(item);
    };

    return (
      <li
        className={itemClassName}
        key={item.key}
        onClick={handleMenuClick}
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

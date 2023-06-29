import React from 'react';
import classNames from 'classnames';

import type { MenuItem } from './type.d';

export interface MenuProps {
  mode?: 'vertical' | 'horizontal';
  items: MenuItem[];
  className?: string;
  style?: React.CSSProperties;
  onClick?: Function;
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

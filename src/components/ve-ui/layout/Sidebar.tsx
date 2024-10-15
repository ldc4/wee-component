import React from 'react';
import classNames from 'classnames';

export interface SidebarProps {
  width?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 布局之侧边栏组件
const Sidebar = (props: SidebarProps) => {

  const { children, width, className, style } = props;
  const renderWidth = isNaN(Number(width)) ? width : `${width}px`;
  const mergeClassNames = classNames('ve-sidebar', className);

  return (
    <>
      <section
        className={mergeClassNames}
        style={{
          ...style,
          width: renderWidth,
        }}
      >{ children }</section>
    </>
  )
};

export default Sidebar;

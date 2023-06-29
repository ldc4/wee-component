import React from 'react';
import classNames from 'classnames';

export interface SiderProps {
  width?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 布局之侧边栏组件
const Sider = (props: SiderProps) => {

  const { children, width, className, style } = props;
  const renderWidth = isNaN(Number(width)) ? width : `${width}px`;
  const mergeClassNames = classNames('ve-sider', className);

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

export default Sider;

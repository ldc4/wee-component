import React from 'react';
import classNames from 'classnames';

export interface HeaderProps {
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 布局之头部组件
const Header = (props: HeaderProps) => {

  const { children, height, className, style } = props;
  const renderHeight = isNaN(Number(height)) ? height : `${height}px`;
  const mergeClassNames = classNames('ve-header', className);

  return (
    <>
      <header
        className={ mergeClassNames }
        style={{
          ...style,
          height: renderHeight,
        }}
      >{ children }</header>
    </>
  )
};

export default Header;

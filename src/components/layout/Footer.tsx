import React from 'react';
import classNames from 'classnames';

export interface FooterProps {
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 布局之脚部组件
const Footer = (props: FooterProps) => {

  const { children, height, className, style } = props;
  const renderHeight = isNaN(Number(height)) ? height : `${height}px`;
  const mergeClassNames = classNames('ve-footer', className);

  return (
    <>
      <footer
        className={ mergeClassNames }
        style={{
          ...style,
          height: renderHeight,
        }}
      >{ children }</footer>
    </>
  )
};

export default Footer;

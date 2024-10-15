import React from 'react';
import classNames from 'classnames';

export interface ContentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 布局之内容组件
const Content = (props: ContentProps) => {

  const { children, className, style } = props;
  const mergeClassNames = classNames('ve-content', className);

  return (
    <>
      <main
        className={ mergeClassNames }
        style={ style }
      >{ children }</main>
    </>
  )
};

export default Content;

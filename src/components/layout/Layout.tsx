import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Sider from './Sider';

export interface LayoutProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * 布局组件
 */
const Layout = (props: any) => {
  const { children, className, style } = props;
  const [hasSider, setHasSider] = useState(false);
  const mergeClassNames = classNames('ve-layout', className);

  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (!child || typeof child !== 'object') return;
      if (child.type === Sider) setHasSider(true);
    });
  }, [children]);

  return (
    <>
      <section
        className={ mergeClassNames }
        style={{
          ...style,
          flexDirection: hasSider ? 'row' : 'column',
        }}
      >
        { props.children }
      </section>
    </>
  )
};

export default Layout;

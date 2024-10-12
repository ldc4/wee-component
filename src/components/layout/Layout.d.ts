import React from 'react';
export interface LayoutProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
/**
 * 布局组件
 */
declare const Layout: (props: any) => import("react/jsx-runtime").JSX.Element;
export default Layout;

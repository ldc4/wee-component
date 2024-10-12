import React from 'react';
export interface MenuProps {
    mode?: 'vertical' | 'horizontal';
    items: MenuItem[];
    className?: string;
    style?: React.CSSProperties;
    onClick?: Function;
}
export interface SiderItem {
    key: string;
    label: string;
    path: string;
}
export interface MenuItem {
    key: string;
    label: string;
    path?: string;
    siders?: SiderItem[];
}
/**
 * 菜单组件
 */
declare const Menu: (props: MenuProps) => import("react/jsx-runtime").JSX.Element;
export default Menu;

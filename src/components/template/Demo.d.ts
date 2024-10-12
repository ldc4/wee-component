import React from 'react';
export interface Data {
    key: string;
    value: string;
}
export interface DemoProps {
    data: Data;
    className?: string;
    style?: React.CSSProperties;
}
declare const Demo: (props: DemoProps) => import("react/jsx-runtime").JSX.Element;
export default Demo;

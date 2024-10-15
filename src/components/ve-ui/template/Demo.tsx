import React from 'react';
import classNames from 'classnames';

// 数据
export interface Data {
  key: string;      // 唯一标识
  value: string;    // 值
}

export interface DemoProps {
  data: Data;
  className?: string;
  style?: React.CSSProperties;
}

// 组件名称
const Demo = (props: DemoProps) => {

  const { data, className, style } = props;
  const mergeClassNames = classNames('ve-demo', className);

  return (
    <>
      <div
        className={ mergeClassNames }
        style={ style }
      >{ data.value }</div>
    </>
  )
};

export default Demo;

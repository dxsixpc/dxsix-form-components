import React from 'react';
import { Alert } from 'antd';
import type { AlertProps } from 'antd/lib/alert';
import type { ComponentType } from '../../type';
import { Wrapper } from './Styled';

export interface ErrorAlertWidgetProps extends AlertProps {
  componentProps: ComponentType;
}

// 错误提示。当JsonPanel不能正确渲染组件时，用此组件替代，并提示组件渲染错误
const ErrorAlertWidget: React.FC<ErrorAlertWidgetProps> = (props) => {
  const { componentProps } = props;
  const label = componentProps.label ? `“${componentProps.label}”` : '';
  const type = componentProps.type ? `(${componentProps.type})` : '';
  return (
    <Wrapper>
      <Alert
        type='error'
        showIcon
        message={`${label}组件渲染错误,请检查json里的组件type${type}是否正确`}
      />
    </Wrapper>
  );
};

export default ErrorAlertWidget;

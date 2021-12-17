import React from 'react';
import { Alert } from 'antd';
import type { AlertProps } from 'antd/lib/alert';
import { Wrapper } from './Styled';

export interface AlertWidgetProps extends AlertProps {}

const AlertWidget: React.FC<AlertWidgetProps> = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper>
      <Alert {...rest} />
    </Wrapper>
  );
};

export default AlertWidget;

import React from 'react';
import { Alert } from 'antd';
import type { AlertProps } from 'antd/lib/alert';
import { Wrapper } from './Styled';

export interface FormAlertProps extends AlertProps {}

const FormAlert: React.FC<FormAlertProps> = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper>
      <Alert {...rest} />
    </Wrapper>
  );
};

export default FormAlert;

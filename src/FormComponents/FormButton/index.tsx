import React, { FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { Wrapper } from './Styled';

export interface FormButtonProps extends ButtonProps {
  buttonText?: string;
}

const FormButton: FC<FormButtonProps> = (props) => {
  const { buttonText = '按钮', ...rest } = props;

  return (
    <Wrapper>
      <Button {...rest}>{buttonText}</Button>
    </Wrapper>
  );
};

export default FormButton;

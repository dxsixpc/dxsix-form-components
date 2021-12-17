import type { FC } from 'react';
import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd/lib/button';
import { Wrapper } from './Styled';

export interface ButtonWidgetProps extends ButtonProps {
  buttonText?: string;
}

const ButtonWidget: FC<ButtonWidgetProps> = (props) => {
  const { buttonText = '按钮', ...rest } = props;

  return (
    <Wrapper>
      <Button {...rest}>{buttonText}</Button>
    </Wrapper>
  );
};

export default ButtonWidget;

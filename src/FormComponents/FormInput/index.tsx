import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormInputProps extends InputProps {
  props?: any;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper>
      <Input {...rest} />
    </Wrapper>
  );
};

export default FormInput;

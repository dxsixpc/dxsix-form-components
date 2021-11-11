import React from 'react';
import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd/lib/input-number';
import { Wrapper } from './Styled';

export interface FormInputNumberProps extends InputNumberProps {
  props?: any;
}

const FormInput: React.FC<FormInputNumberProps> = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper>
      <InputNumber
        parser={(value: string | undefined) =>
          Number(String(value).replace(/[^0-9]/gi, ''))
        }
        {...rest}
      />
    </Wrapper>
  );
};

export default FormInput;

import React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormTextAreaProps extends TextAreaProps {
  props?: any;
}

const FormTextArea: React.FC<FormTextAreaProps> = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper>
      <Input.TextArea autoSize={{ minRows: 4, maxRows: 4 }} {...rest} />
    </Wrapper>
  );
};

export default FormTextArea;

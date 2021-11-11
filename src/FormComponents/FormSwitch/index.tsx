import React from 'react';
import { Switch } from 'antd';
import type { SwitchProps } from 'antd/lib/switch';
import { Wrapper } from './Styled';

export interface FormSwitchProps extends SwitchProps {
  value?: boolean;
}

const FormSwitch: React.FC<FormSwitchProps> = (props) => {
  const { value, checked, ...rest } = props;
  return (
    <Wrapper>
      <Switch checked={value || checked} {...rest} />
    </Wrapper>
  );
};

export default FormSwitch;

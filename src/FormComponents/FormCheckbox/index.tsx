import React, { useEffect, useState } from 'react';
import { Checkbox, List } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import { OptionsConfigType, OptionType } from '../type';

export interface FormCheckboxProps extends CheckboxGroupProps {
  size?: 'large' | 'middle' | 'small';
  optionsConfig: OptionsConfigType;
  onChange?: (value: CheckboxValueType[]) => void;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
  const { value, optionsConfig, size, onChange, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;
  const defaultValue = optionsConfig?.defaultValue || undefined;
  const [propsValue, setPropsValue] = useState(value || defaultValue);

  const onRadioChange = (RadioChangeValue: CheckboxValueType[]) => {
    setPropsValue(RadioChangeValue);
    if (typeof onChange === 'function') {
      onChange(RadioChangeValue);
    }
  };

  useEffect(() => {
    setPropsValue(optionsConfig?.defaultValue as CheckboxValueType[]);
  }, [optionsConfig]);

  return (
    <Wrapper>
      <List bordered itemLayout='vertical' size={listSize}>
        <Checkbox.Group value={propsValue} onChange={onRadioChange} {...rest}>
          {optionsConfig?.options?.map((option: OptionType) => {
            return (
              <List.Item key={uniqueId()}>
                <Checkbox value={option.value}>{option.label}</Checkbox>
              </List.Item>
            );
          })}
        </Checkbox.Group>
      </List>
    </Wrapper>
  );
};

export default FormCheckbox;

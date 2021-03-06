import React, { useEffect, useState } from 'react';
import { Checkbox, List } from 'antd';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormCheckboxProps extends CheckboxGroupProps {
  size?: 'large' | 'middle' | 'small';
  optionsConfig: OptionsConfigType<'Checkbox'>;
  onChange?: (value: CheckboxValueType[]) => void;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
  const { value, optionsConfig, size, onChange, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;
  const defaultValue = optionsConfig?.defaultValue || undefined;
  const [propsValue, setPropsValue] = useState(value || defaultValue);

  const onRadioChange = (RadioChangeValue: CheckboxValueType[]) => {
    setPropsValue(RadioChangeValue);
    onChange && onChange(RadioChangeValue);
  };

  useEffect(() => {
    // 设置初始选中的值
    onChange && onChange(propsValue);
  }, [onChange, propsValue]);

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

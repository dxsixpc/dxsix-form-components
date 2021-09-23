import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import { OptionsConfigType, OptionType } from '../type';

export interface FormSelectProps<T> extends SelectProps<T> {
  optionsConfig: OptionsConfigType;
  onChange: (value: T) => void;
}

const FormSelect: React.FC<FormSelectProps<string>> = (props) => {
  const { value, optionsConfig, onChange, ...rest } = props;
  const defaultValue = optionsConfig?.defaultValue;
  const [propsValue, setPropsValue] = useState<string>(
    value || (defaultValue as string)
  );

  const onSelectChange = (changeValue: string) => {
    setPropsValue(changeValue);
    onChange && onChange(String(changeValue));
  };

  useEffect(() => {
    // 设置初始选中的值
    onChange(propsValue);
  }, []);

  return (
    <Wrapper>
      <Select
        value={String(propsValue) || undefined}
        onChange={onSelectChange}
        {...rest}
      >
        {optionsConfig?.options?.map((option: OptionType) => {
          return (
            <Select.Option key={uniqueId()} value={option.value as string}>
              {option.label}
            </Select.Option>
          );
        })}
      </Select>
    </Wrapper>
  );
};

export default FormSelect;

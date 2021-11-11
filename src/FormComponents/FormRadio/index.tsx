import React, { useEffect, useState } from 'react';
import { Radio, List } from 'antd';
import type { RadioProps, RadioChangeEvent } from 'antd/lib/radio';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../type';

export interface FormRadioProps extends RadioProps {
  size?: 'large' | 'middle' | 'small';
  optionsConfig: OptionsConfigType;
  onChange?: (value: RadioChangeEvent) => void;
}

const FormRadio: React.FC<FormRadioProps> = (props) => {
  const { value, optionsConfig, size, onChange, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;
  const defaultValue = optionsConfig?.defaultValue || undefined;
  const [propsValue, setPropsValue] = useState(value || defaultValue);

  const onRadioChange = (e: RadioChangeEvent) => {
    setPropsValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  useEffect(() => {
    // 设置初始选中的值
    onChange && onChange(propsValue);
  }, [onChange, propsValue]);

  return (
    <Wrapper>
      <List bordered itemLayout='vertical' size={listSize}>
        <Radio.Group value={propsValue} onChange={onRadioChange} {...rest}>
          {optionsConfig?.options?.map((option: OptionType) => {
            return (
              <List.Item key={uniqueId()}>
                <Radio value={option.value}>{option.label}</Radio>
              </List.Item>
            );
          })}
        </Radio.Group>
      </List>
    </Wrapper>
  );
};

export default FormRadio;

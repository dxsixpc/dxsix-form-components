import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { uniqueId } from 'lodash';
import OptionsContainer from './OptionsContainer';
import type { OptionType, OptionsConfigType } from '../../type';
import { Wrapper } from './Styled';

export interface FormOptionsProps {
  value?: OptionsConfigType<'allType'>;
  optionsConfig: OptionsConfigType<'allType'>;
  onChange: (optionsConfig: OptionsConfigType<'allType'>) => void;
}

const FormOptions: React.FC<FormOptionsProps> = (props) => {
  const { value, onChange } = props;
  const [optionsConfig, setOptionsConfig] = useState<
    OptionsConfigType<'allType'>
  >(value || props.optionsConfig);

  const onOptionsConfigChange = (
    newOptionsConfig: OptionsConfigType<'allType'>
  ) => {
    const { options } = newOptionsConfig;
    // 设置选中的默认值
    let defaultValue: any = optionsConfig.type === 'Checkbox' ? [] : '';
    options.forEach((option: OptionType) => {
      if (option.checked) {
        if (
          optionsConfig.type === 'Radio' ||
          optionsConfig.type === 'trueFalse'
        ) {
          defaultValue = option.value;
        } else if (optionsConfig.type === 'Checkbox') {
          defaultValue.push(option.value);
        }
      }
    });
    setOptionsConfig({ ...newOptionsConfig, defaultValue });
    onChange({ ...newOptionsConfig, defaultValue });
  };

  // 添加选项
  const addOption = () => {
    const newOptions = optionsConfig.options.concat({
      id: uniqueId('op'),
      label: `选项${optionsConfig.options.length + 1}`,
      value: `选项${optionsConfig.options.length + 1}`,
      checked: false
    });
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  return (
    <Wrapper>
      <OptionsContainer
        optionsConfig={optionsConfig}
        onOptionsConfigChange={onOptionsConfigChange}
      />
      <Button type='text' style={{ color: '#00bcd4' }} onClick={addOption}>
        <PlusOutlined /> 添加选项
      </Button>
    </Wrapper>
  );
};

export default FormOptions;

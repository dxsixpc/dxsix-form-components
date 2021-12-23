import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { uniqueId } from 'lodash';
import OptionsContainer from './OptionsContainer';
import type { OptionType, OptionsConfigType } from '../../type';
import { Wrapper } from './Styled';

const defaultOptionsConfig: OptionsConfigType<'Radio'> = {
  type: 'Radio',
  defaultValue: '1',
  options: [
    { label: '1', value: '1', checked: true, id: '0' },
    { label: '2', value: '2', checked: false, id: '1' },
    { label: '3', value: '3', checked: false, id: '2' },
    { label: '4', value: '4', checked: false, id: '3' },
    { label: '5', value: '5', checked: false, id: '4' }
  ]
};

export interface FormOptionsProps {
  value?: OptionsConfigType;
  optionsConfig: OptionsConfigType;
  onChange: (optionsConfig: OptionsConfigType) => void;
}

const FormOptions: React.FC<FormOptionsProps> = (props) => {
  const { value, onChange } = props;
  const [optionsConfig, setOptionsConfig] = useState<
    OptionsConfigType<'allType'>
  >(value || props.optionsConfig || defaultOptionsConfig);

  const onOptionsConfigChange = (newOptionsConfig: OptionsConfigType) => {
    const { options } = newOptionsConfig;
    // 设置选中的默认值
    let defaultValue: any = optionsConfig.type === 'Checkbox' ? [] : '';
    options.forEach((option: OptionType) => {
      if (option.checked) {
        if (optionsConfig.type === 'Radio') {
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

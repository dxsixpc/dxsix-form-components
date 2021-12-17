import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormRadio from '../../FormComponents/FormRadio';
import type { FormRadioProps } from '../../FormComponents/FormRadio';

export default {
  title: 'FormComponents/FormRadio',
  component: FormRadio,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormRadioProps> = (args) => <FormRadio {...args} />;

export const Radio = Template.bind({});

Radio.args = {
  size: 'middle',
  optionsConfig: {
    type: 'Radio',
    defaultValue: 'middle',
    options: [
      {
        label:
          '大家好，这是表单名称长度测试显示阿斯利康黑咖喱看到过拉胯话大概行安徽两个卡就离开的发生的',
        value: 'large',
        checked: false,
        id: '0'
      },
      { label: '中', value: 'middle', checked: true, id: '1' },
      { label: '小', value: 'small', checked: false, id: '2' }
    ]
  }
};

import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormSelect from '../../FormComponents/FormSelect';
import type { FormSelectProps } from '../../FormComponents/FormSelect';

export default {
  title: 'FormComponents/FormSelect',
  component: FormSelect,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormSelectProps<string>> = (args) => (
  <FormSelect {...args} />
);

export const Select = Template.bind({});

Select.args = {
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

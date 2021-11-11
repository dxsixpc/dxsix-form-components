import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormInputNumber from '../../FormComponents/FormInputNumber';
import type { FormInputNumberProps } from '../../FormComponents/FormInputNumber';

export default {
  title: 'FormComponents/FormInputNumber',
  component: FormInputNumber,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormInputNumberProps> = (args) => (
  <FormInputNumber {...args} />
);

export const InputNumber = Template.bind({});

InputNumber.args = {
  value: 616,
  readOnly: false,
  size: 'middle',
  step: 1,
  placeholder: '请输入数字'
};

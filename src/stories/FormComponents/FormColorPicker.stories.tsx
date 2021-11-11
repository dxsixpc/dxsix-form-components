import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormColorPicker from '../../FormComponents/FormColorPicker';
import type { FormColorPickerProps } from '../../FormComponents/FormColorPicker';

export default {
  title: 'FormComponents/FormColorPicker',
  component: FormColorPicker,
  argTypes: {
    value: {
      description: '设置颜色',
      control: 'color'
    },
    onChange: {
      description: '颜色改变时的回调'
    }
  }
} as Meta;

const Template: Story<FormColorPickerProps> = (args) => (
  <FormColorPicker {...args} />
);

export const ColorPicker = Template.bind({});

const onChange = (value: string) => {
  console.log(value);
};

ColorPicker.args = {
  value: '#000000',
  onChange
};

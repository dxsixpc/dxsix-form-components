import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormTextArea from '../../FormComponents/FormTextArea';
import type { FormTextAreaProps } from '../../FormComponents/FormTextArea';

export default {
  title: 'FormComponents/FormTextArea',
  component: FormTextArea,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormTextAreaProps> = (args) => <FormTextArea {...args} />;

export const TextArea = Template.bind({});

TextArea.args = {
  value: '这是文本输入框',
  readOnly: false,
  size: 'middle',
  placeholder: '请输入文本'
};

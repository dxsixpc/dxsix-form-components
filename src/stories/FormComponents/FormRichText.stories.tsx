import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormRichText from '../../FormComponents/FormRichText';
import type { FormRichTextProps } from '../../FormComponents/FormRichText';

export default {
  title: 'FormComponents/FormRichText',
  component: FormRichText,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormRichTextProps> = (args) => <FormRichText {...args} />;

export const RichText = Template.bind({});

RichText.args = {
  value: '这是富文本编辑器',
  readOnly: false,
  placeholder: '请编辑内容'
};

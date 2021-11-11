import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormMonacoEditor from '../../FormComponents/FormMonacoEditor';
import type { FormMonacoEditorProps } from '../../FormComponents/FormMonacoEditor';

export default {
  title: 'FormComponents/FormMonacoEditor',
  component: FormMonacoEditor,
} as Meta;

const Template: Story<FormMonacoEditorProps> = (args) => (
  <FormMonacoEditor {...args} />
);

export const MonacoEditor = Template.bind({});

MonacoEditor.args = {
  height: '690px',
  language: 'javascript',
};

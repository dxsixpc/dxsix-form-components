import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormOptions from '../../FormComponents/FormOptions';
import type { FormOptionsProps } from '../../FormComponents/FormOptions';

export default {
  title: 'FormComponents/FormOptions',
  component: FormOptions
} as Meta;

const Template: Story<FormOptionsProps> = (args) => <FormOptions {...args} />;

export const Options = Template.bind({});

Options.args = {
  optionsConfig: {
    type: 'Checkbox',
    defaultValue: ['middle'],
    options: [
      { label: '大', value: 'large', checked: false, id: '0' },
      { label: '中', value: 'middle', checked: true, id: '1' },
      { label: '小', value: 'small', checked: false, id: '2' }
    ]
  }
};

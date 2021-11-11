import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormSwitch from '../../FormComponents/FormSwitch';
import type { FormSwitchProps } from '../../FormComponents/FormSwitch';

export default {
  title: 'FormComponents/FormSwitch',
  component: FormSwitch,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormSwitchProps> = (args) => <FormSwitch {...args} />;

export const Switch = Template.bind({});

Switch.args = {
  value: true
};

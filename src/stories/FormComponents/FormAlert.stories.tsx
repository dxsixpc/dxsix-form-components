import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormAlert from '../../FormComponents/FormAlert';
import type { FormAlertProps } from '../../FormComponents/FormAlert';

export default {
  title: 'FormComponents/FormAlert',
  component: FormAlert
} as Meta;

const Template: Story<FormAlertProps> = (args) => <FormAlert {...args} />;

export const Alert = Template.bind({});

Alert.args = {
  message: '这是提示框',
  type: 'warning',
  closable: true,
  showIcon: true
};

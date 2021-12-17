import React from 'react';
import type { Story, Meta } from '@storybook/react';
import AlertWidget from '../../Widgets/AlertWidget';
import type { AlertWidgetProps } from '../../Widgets/AlertWidget';

export default {
  title: 'Widgets/AlertWidget',
  component: AlertWidget
} as Meta;

const Template: Story<AlertWidgetProps> = (args) => <AlertWidget {...args} />;

export const Alert = Template.bind({});

Alert.args = {
  message: '这是提示框',
  type: 'warning',
  closable: true,
  showIcon: true
};

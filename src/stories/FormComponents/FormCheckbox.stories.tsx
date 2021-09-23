import { Story, Meta } from '@storybook/react';
import FormCheckbox from '../../FormComponents/FormCheckbox';
import type { FormCheckboxProps } from '../../FormComponents/FormCheckbox';

export default {
  title: 'FormComponents/FormCheckbox',
  component: FormCheckbox,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormCheckboxProps> = (args) => <FormCheckbox {...args} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
  size: 'middle',
  optionsConfig: {
    type: 'Checkbox',
    defaultValue: ['middle'],
    options: [
      { label: '大', value: 'large', checked: false, index: 0 },
      { label: '中', value: 'middle', checked: true, index: 1 },
      { label: '小', value: 'small', checked: false, index: 2 }
    ]
  }
};

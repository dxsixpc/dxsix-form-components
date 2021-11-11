import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormButton from '../../FormComponents/FormButton';
import type { FormButtonProps } from '../../FormComponents/FormButton';

export default {
  title: 'FormComponents/FormButton',
  component: FormButton,
  argTypes: {
    size: {
      description: '设置按钮大小',
      defaultValue: { summary: 'middle' },
      // type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'large | middle | small'
          // detail: 'something really really long'
        }
      },
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    },
    buttonText: {
      description: '设置按钮内文字',
      defaultValue: { summary: '按钮' },
      table: { type: { summary: 'string' } }
    },
    type: {
      description: '设置按钮类型',
      defaultValue: { summary: 'primary' },
      table: {
        type: { summary: 'primary | ghost | dashed | link | text | default' }
      },
      control: {
        type: 'select',
        options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default']
      }
    },
    danger: {
      description: '设置危险按钮',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
      control: 'boolean'
    },
    ghost: {
      description: '幽灵属性，使按钮背景透明',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
      control: 'boolean'
    },
    block: {
      description: '将按钮宽度调整为其父宽度的选项',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
      control: 'boolean'
    },
    disabled: {
      description: '按钮失效状态',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
      control: 'boolean'
    },
    loading: {
      description: '设置按钮载入状态',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
      control: 'boolean'
    },
    href: {
      description: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
      defaultValue: { summary: '' },
      table: { type: { summary: 'string' } },
      control: 'text'
    },
    target: {
      description: '相当于a链接的target属性,href存在时生效',
      defaultValue: { summary: '' },
      table: { type: { summary: 'string' } },
      control: 'text'
    },
    htmlType: {
      description: '设置button原生的type值，可选值请参考 HTML 标准',
      defaultValue: { summary: 'button' },
      table: { type: { summary: 'string' } },
      control: {
        type: 'inline-radio',
        options: ['button', 'reset', 'submit']
      }
    },
    shape: {
      description: '设置按钮形状',
      defaultValue: { summary: undefined },
      table: { type: { summary: ' circle | round' } },
      control: {
        type: 'inline-radio',
        options: ['reset', 'circle', 'round']
      }
    }
  }
} as Meta;

const Template: Story<FormButtonProps> = (args) => <FormButton {...args} />;

export const Button = Template.bind({});

Button.args = {
  buttonText: '按钮',
  type: 'primary',
  size: 'middle',
  danger: false,
  block: false,
  disabled: false,
  ghost: false,
  loading: false,
  href: '',
  htmlType: 'button',
  target: ''
};

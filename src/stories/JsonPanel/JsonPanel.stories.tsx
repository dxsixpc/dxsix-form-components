import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { JsonPanel } from '../../JsonPanel';
import type { JsonPanelProps } from '../../JsonPanel';
import { jsonPanelSetting } from '../../JsonPanel/mock/settingConfig';

// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   ArgsTable,
//   Stories,
//   PRIMARY_STORY
// } from '@storybook/addon-docs/blocks';

export default {
  title: 'JsonPanel',
  component: JsonPanel
  // parameters: {
  //   docs: {
  //     description: {
  //       component: '组件描述111'
  //     },
  //     page: () => (
  //       <>
  //         <Title />
  //         <Subtitle />
  //         <Description />
  //         <Primary />
  //       </>
  //     )
  //   },
  //   componentSubtitle: '副标题'
  // }
} as Meta;

const Template: Story<JsonPanelProps> = (args) => <JsonPanel {...args} />;

export const JsonPanelFC = Template.bind({});

const onChange = (value: any) => {
  console.log(value);
};

JsonPanelFC.args = {
  panelType: 'EditorPanel',
  panelProps: {
    panelData: { need_user_info: true, name: '姓名' },
    panelConfig: jsonPanelSetting,
    onChange
  },
  monacoLanguage: 'json'
};

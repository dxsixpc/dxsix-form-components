import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { FormJsonPanel } from '../../FormJsonPanel';
import type { FormJsonPanelProps } from '../../FormJsonPanel';
import { jsonPanelSetting } from '../../mock/settingConfig';
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
  title: 'FormJsonPanel',
  component: FormJsonPanel
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

const Template: Story<FormJsonPanelProps> = (args) => (
  <FormJsonPanel {...args} />
);

export const Json_Panel = Template.bind({});

const onChange = (value: any) => {
  console.log(value);
};

Json_Panel.args = {
  panelType: 'EditorPanel',
  panelProps: {
    panelData: {},
    panelConfig: jsonPanelSetting,
    onChange
  },
  monacoLanguage: 'json'
};

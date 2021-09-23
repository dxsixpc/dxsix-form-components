import React, { FC } from 'react';
import { Tabs } from 'antd';
import { ComponentsRender } from '../../ComponentsRender';
import { PanelBaseProps, PanelTabsType, PanelConfigType } from '../../type';
import { Wrapper } from './Styled';

export interface SettingPanelProps extends PanelBaseProps {
  onSettingChange: (changedValues: AnyObject, values: AnyObject) => void;
}

// 渲染Tabs页
const SettingPanel: FC<SettingPanelProps> = (props) => {
  const { panelData, panelConfig, componentMap, onSettingChange } = props;
  const { TabPane } = Tabs;

  // 渲染每个Tabs的面板
  const TabPaneRender = (tabsList?: PanelTabsType[]) => {
    return tabsList?.map((tabs) => {
      return (
        <TabPane key={tabs.id} tab={tabs.tabsName}>
          <ComponentsRender
            initialValues={panelData}
            componentList={tabs.componentList}
            onValuesChange={onSettingChange}
            componentMap={componentMap}
          />
        </TabPane>
      );
    });
  };

  return (
    <Wrapper className='SettingPanel'>
      <Tabs tabPosition='left'>
        {TabPaneRender((panelConfig as PanelConfigType)?.tabs)}
      </Tabs>
    </Wrapper>
  );
};

export default SettingPanel;

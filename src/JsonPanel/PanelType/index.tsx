import React from 'react';
import { Layout } from 'antd';
import EditorPanel from './EditorPanel';
import SettingPanel from './SettingPanel';
import type { PanelType, PanelBaseProps } from '../type';
import PanelHeader from './components/PanelHeader';
import PanelFooter from './components/PanelFooter';
import { Wrapper } from './Styled';

export interface PanelPropsType extends PanelBaseProps {
  onSmall?: () => void;
  onBig?: () => void;
  onClose?: () => void;
}

export interface JsonPanelProps {
  // 面板类型
  panelType: PanelType;
  // 面板参数
  panelProps: PanelPropsType;
  // monaco编辑器使用的语言
  monacoLanguage: string;
}

// 根据类型返回对应的面板
export const JsonPanel: React.FC<JsonPanelProps> = (props) => {
  const { panelType, panelProps, monacoLanguage } = props;
  const {
    onBig,
    onSmall,
    onClose,
    onChange,
    panelData,
    panelConfig,
    componentMap
  } = panelProps;
  let panelJson = '';
  let returnValue: AnyObject = {};
  let initialValues: AnyObject = panelData || {};

  // 点击提交按钮时
  const onSubmit = () => {
    const onChangeValue = panelType === 'EditorPanel' ? panelJson : returnValue;
    onChange && onChange(onChangeValue);
    onClose && onClose();
  };

  // 编辑面板数据改变时
  const onEditorChange = (value: string) => {
    panelJson = value;
  };

  // 配置面板数据改变时
  const onSettingChange = (changeValue: any) => {
    returnValue = { ...returnValue, ...changeValue };
    initialValues = { ...initialValues, ...changeValue };
  };

  return (
    <Wrapper>
      <Layout>
        <PanelHeader
          panelType={panelType}
          onBig={onBig}
          onSmall={onSmall}
          onClose={onClose}
        />
        <Layout.Content>
          {panelType === 'EditorPanel' ? (
            <EditorPanel
              panelData={panelData}
              panelConfig={panelConfig}
              monacoLanguage={monacoLanguage}
              componentMap={componentMap}
              onEditorChange={onEditorChange}
            />
          ) : (
            <SettingPanel
              panelData={initialValues}
              panelConfig={panelConfig}
              componentMap={componentMap}
              onSettingChange={onSettingChange}
            />
          )}
        </Layout.Content>
        <PanelFooter onSubmit={onSubmit} onClose={onClose} />
      </Layout>
    </Wrapper>
  );
};

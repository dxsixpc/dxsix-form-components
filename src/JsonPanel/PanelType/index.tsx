import React, { useState } from 'react';
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
  const [panelJson, setPanelJson] = useState<string>('');
  const [returnValue, setReturnValue] = useState<any>({});
  const [initialValues, setInitialValues] = useState<AnyObject>(
    panelData || {}
  );
  const { Content } = Layout;

  const onSubmit = () => {
    if (panelType === 'EditorPanel') {
      onChange && onChange(panelJson);
    } else if (panelType === 'SettingPanel') {
      onChange && onChange(returnValue);
    }
    onClose && onClose();
  };

  // 编辑面板数据改变时
  const onEditorChange = (value: string) => {
    setPanelJson(value);
  };

  // 配置面板数据改变时
  const onSettingChange = (value: any) => {
    setReturnValue({ ...returnValue, ...value });
    setInitialValues({ ...initialValues, ...value });
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
        <Content>
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
        </Content>
        <PanelFooter onSubmit={onSubmit} onClose={onClose} />
      </Layout>
    </Wrapper>
  );
};

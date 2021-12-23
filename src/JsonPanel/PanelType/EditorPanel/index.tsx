import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { FormMonacoEditor } from '../../../FormComponents';
import type { PanelBaseProps, PanelConfigType } from '../../type';
import SettingPanel from '../SettingPanel';
import { toJson } from './util';
import { Wrapper } from './Styled';

export interface EditorPanelProps extends PanelBaseProps {
  onEditorChange: (panelData: string) => void;
}

// 配置面板
const EditorPanel: React.FC<EditorPanelProps> = (props) => {
  const {
    panelData,
    panelConfig,
    monacoLanguage = 'json',
    componentMap,
    onEditorChange
  } = props;
  const [editorValue, setEditorValue] = useState<PanelConfigType | string>(
    panelConfig || ''
  );
  let initialValues: AnyObject = panelData || {};

  // 每次组件改变时，格式化数据
  const onValuesChange = (changedValues: AnyObject) => {
    initialValues = { ...initialValues, ...changedValues };
  };

  const onMonacoChange = (value?: string) => {
    onEditorChange(toJson(value));
    setEditorValue(toJson(value));
  };

  return (
    <Wrapper>
      <FormMonacoEditor
        height='100%'
        defaultLanguage={monacoLanguage}
        value={JSON.stringify(editorValue, null, 2)}
        onChange={onMonacoChange}
      />
      <SettingPanel
        panelData={initialValues}
        panelConfig={editorValue}
        componentMap={componentMap}
        onSettingChange={onValuesChange}
      />
    </Wrapper>
  );
};

export default EditorPanel;

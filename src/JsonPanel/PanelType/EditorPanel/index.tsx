import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { FormMonacoEditor } from '../../../FormComponents';
import type { PanelBaseProps, PanelConfigType } from '../../type';
import SettingPanel from '../SettingPanel';
import { formatJson, toJson } from './util';
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
  let returnValue: AnyObject = {};

  // 每次组件改变时，格式化数据
  const onValuesChange = (changedValues: AnyObject) => {
    returnValue = { ...returnValue, ...changedValues };
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
        value={formatJson(JSON.stringify(editorValue))}
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

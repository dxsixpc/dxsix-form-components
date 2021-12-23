import React from 'react';
import { Layout } from 'antd';
import type { FormInstance } from 'antd';
import EditorPanel from './EditorPanel';
import SettingPanel from './SettingPanel';
import type {
  PanelType,
  PanelBaseProps,
  FieldErrorType,
  PanelConfigType
} from '../type';
import PanelHeader from './components/PanelHeader';
import PanelFooter from './components/PanelFooter';
import { Wrapper, GlobalStyle } from './Styled';
import { validatePanelValue } from '../utils';

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
  let formFieldsError: FieldErrorType;

  // 点击提交按钮时
  const onSubmit = () => {
    const onChangeValue = panelType === 'EditorPanel' ? panelJson : returnValue;
    // 校验结果
    let result = true;
    // 若是配置面板，则进行数据校验，并提示
    if (panelType === 'SettingPanel') {
      // 检查校验规则里是否有报错信息
      result = validatePanelValue(
        formFieldsError,
        panelConfig as PanelConfigType
      );
    }
    // 若是编辑面板，或配置面板校验结果通过，则返回数据
    if (panelType === 'EditorPanel' || result) {
      onChange && onChange(onChangeValue);
      onClose && onClose();
    }
  };

  // 编辑面板数据改变时
  const onEditorChange = (value: string) => {
    panelJson = value;
  };

  // 配置面板数据改变时
  const onSettingChange = (
    changeValue: any,
    _values: AnyObject,
    form: FormInstance<any>
  ) => {
    // 需稍微延迟一下，等待antd的form校验完成后，才能获取到最新的验证情况。
    setTimeout(() => {
      const newFormFieldsError = {} as FieldErrorType;
      // eslint-disable-next-line no-unused-expressions
      form.getFieldsError()?.forEach((item) => {
        if (item?.name?.[0]) newFormFieldsError[item.name[0]] = item;
      });
      formFieldsError = { ...formFieldsError, ...newFormFieldsError };
    });
    returnValue = { ...returnValue, ...changeValue };
    initialValues = { ...initialValues, ...changeValue };
  };

  return (
    <Wrapper>
      <GlobalStyle />
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

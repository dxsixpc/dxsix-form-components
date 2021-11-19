import React from 'react';
import Editor from '@monaco-editor/react';
import type { EditorProps, OnChange } from '@monaco-editor/react';
import { useDebounceFn } from 'ahooks';
import { Wrapper } from './Styled';

// 防抖配置类型
export interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

export interface MonacoEditorWidgetProps extends EditorProps {
  // 防抖延迟时间（毫秒）
  debounceOptions?: DebounceOptions;
}

const FormMonacoEditor: React.FC<MonacoEditorWidgetProps> = (props) => {
  const {
    debounceOptions = { wait: 300 },
    value = '',
    defaultLanguage = 'javascript',
    theme = 'vs-dark',
    onChange,
    ...rest
  } = props;

  // onChange封装
  const onEditorChange: OnChange = (editorValue, ev) => {
    if (onChange) onChange(editorValue, ev);
  };

  // 防抖操作
  const { run } = useDebounceFn(onChange || onEditorChange, debounceOptions);

  return (
    <Wrapper className='MonacoEditorWidget'>
      <Editor
        defaultLanguage={defaultLanguage}
        theme={theme}
        defaultValue={value || ''}
        onChange={run}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormMonacoEditor;

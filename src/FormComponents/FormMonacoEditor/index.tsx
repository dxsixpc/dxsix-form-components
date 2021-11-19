import React from 'react';
import Editor from '@monaco-editor/react';
import type { EditorProps, OnChange } from '@monaco-editor/react';
import { useDebounceFn } from 'ahooks';
import { Wrapper } from './Styled';

const FormMonacoEditor: React.FC<EditorProps> = (props) => {
  const {
    value = '',
    width = '100%',
    height = '500px',
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
  const { run } = useDebounceFn(onChange || onEditorChange, { wait: 200 });

  return (
    <Wrapper className='MonacoEditorWidget'>
      <Editor
        width={width}
        height={height}
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

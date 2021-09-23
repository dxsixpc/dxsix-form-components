import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import type { MonacoEditorProps } from 'react-monaco-editor';
import { Wrapper } from './Styled';

export interface FormMonacoEditorProps extends MonacoEditorProps {}

const FormMonacoEditor: React.FC<FormMonacoEditorProps> = (props) => {
  const {
    value = '',
    width = '100%',
    height = '100%',
    language = 'json',
    theme = 'vs-dark',
    options = { selectOnLineNumbers: true },
    ...rest
  } = props;

  return (
    <Wrapper className="MonacoEditor">
      <MonacoEditor
        width={width}
        height={height}
        language={language}
        theme={theme}
        defaultValue={value || ''}
        options={options}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormMonacoEditor;

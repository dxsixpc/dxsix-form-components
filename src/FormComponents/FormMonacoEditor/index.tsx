import React from 'react';
import Editor from '@monaco-editor/react';
import type { EditorProps } from '@monaco-editor/react';
import { Wrapper } from './Styled';

const FormMonacoEditor: React.FC<EditorProps> = (props) => {
  const {
    value = '',
    width = '100%',
    height = '500px',
    defaultLanguage = 'javascript',
    theme = 'vs-dark',
    ...rest
  } = props;

  return (
    <Wrapper className='MonacoEditor'>
      <Editor
        width={width}
        height={height}
        defaultLanguage={defaultLanguage}
        theme={theme}
        defaultValue={value || ''}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormMonacoEditor;

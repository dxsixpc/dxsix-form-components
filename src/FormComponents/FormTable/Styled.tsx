import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    .TableModal {
      .ant-modal-body {
        max-height: 500px;
        overflow-y: scroll;
      }
    }
  }
`;

export const Wrapper = styled.div`
  .AddButton {
    margin-bottom: 10px;
  }
`;

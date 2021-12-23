import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    .TableModal {
      .ant-modal-body {
        max-height: 500px;
        overflow-y: scroll;
      }
    }
    .ant-message {
      z-index:1050;
    }
  }
`;

export const Wrapper = styled.div`
  .AddButton {
    margin-bottom: 10px;
  }
`;

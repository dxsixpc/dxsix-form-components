import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  .ant-list {
    width: 100%;
    .ant-radio-group {
      width: 100%;
      .ant-list-item {
        display: flex;
        & > label {
          width: 100%;
          span {
            white-space: pre-line;
          }
        }
      }
    }
  }
`;

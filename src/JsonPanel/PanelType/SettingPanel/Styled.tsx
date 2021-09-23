import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 500px;
  overflow: hidden;
  .ant-tabs {
    height: 100%;
    padding-left: 0px;
    .ant-tabs-content {
      height: 100%;
      overflow: scroll;
      .ant-tabs-tabpane {
        padding: 24px;
      }
    }
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 600px;
  background-color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 10px 15px 0px rgba(50, 50, 50, 0.26);
  overflow: hidden;

  .ant-layout {
    width: 100%;
    height: 100%;
    .ant-layout-content {
      width: 100%;
      height: 100%;
      background: #fff;
      min-height: 500px;
    }
  }
`;

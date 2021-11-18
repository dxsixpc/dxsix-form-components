import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 999;
  height: 60px;
  .ant-layout-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    background: #fff;
    border-top: 1px solid #e0e0e0;

    .ant-btn {
      min-width: 80px;
      margin-left: 15px;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 1000;
  .ant-layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0px 15px;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;

    .iconWidget {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50px;
      height: 100%;
    }
    .anticon {
      cursor: pointer;
    }
  }
`;

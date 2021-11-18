import styled from 'styled-components';

export const Wrapper = styled.div`
  .ant-select,
  input {
    max-width: 250px;
  }
  .ant-input-number {
    width: 250px;
  }
  .FormItemRender::before {
    position: absolute;
    top: -10px;
    left: -50px;
    width: 0px;
    height: 130%;
    border: 1px dashed #000;
    content: '';
  }
`;

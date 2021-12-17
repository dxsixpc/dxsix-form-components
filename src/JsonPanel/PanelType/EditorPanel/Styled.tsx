import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  min-height: 500px;
  .MonacoEditor {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
  }
  .SettingPanel {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
  }
`;

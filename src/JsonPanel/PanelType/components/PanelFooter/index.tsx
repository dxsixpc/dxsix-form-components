import React, { FC } from 'react';
import { Layout, Button } from 'antd';
import { Wrapper } from './Styled';

interface PanelFooterProps {
  onSubmit?: () => void;
  onClose?: () => void;
}

// 面板尾部
const PanelFooter: FC<PanelFooterProps> = (props) => {
  const { onSubmit, onClose } = props;
  const { Footer } = Layout;

  return (
    <Wrapper>
      <Footer style={{ width: '100%' }}>
        <Button onClick={onClose}>取消</Button>
        <Button type='primary' onClick={onSubmit}>
          确认
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default PanelFooter;

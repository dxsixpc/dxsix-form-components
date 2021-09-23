import React, { FC, useState } from 'react';
import { Layout } from 'antd';
import {
  SettingFilled,
  CloseOutlined,
  FullscreenOutlined,
  MinusOutlined
} from '@ant-design/icons';
import type { PanelType } from '../../../type';
import { Wrapper } from './Styled';

export interface PanelHeaderProps {
  panelType?: PanelType;
  onSmall?: () => void;
  onBig?: () => void;
  onClose?: () => void;
}

// 面板头部
const PanelHeader: FC<PanelHeaderProps> = (props) => {
  const { panelType, onBig, onSmall, onClose } = props;
  const { Header } = Layout;
  // 控制面板放大缩小显示的样式
  const [scale, setScale] = useState(true);

  // 面板缩小
  const onShowSmall = () => {
    setScale(false);
    onSmall && onSmall();
  };

  // 面板放大
  const onShowBig = () => {
    setScale(true);
    onBig && onBig();
  };

  return (
    <Wrapper>
      <Header>
        <div>
          <SettingFilled style={{ margin: '0px 10px' }} />
          {panelType === 'EditorPanel' ? '编辑面板' : '配置面板'}
        </div>
        <div className='iconWidget'>
          {scale ? (
            <MinusOutlined onClick={onShowSmall} />
          ) : (
            <FullscreenOutlined onClick={onShowBig} />
          )}
          <CloseOutlined onClick={onClose} />
        </div>
      </Header>
    </Wrapper>
  );
};

export default PanelHeader;

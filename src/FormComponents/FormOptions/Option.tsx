import React from 'react';
import { Input, Radio, Checkbox, Space, Tooltip } from 'antd';
import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { OptionItem } from './Styled';

export interface Options {
  label: string;
  value: string;
  checked: boolean;
  index: number;
}

export interface OptionProps {
  type: 'Radio' | 'Checkbox';
  option: Options;
  index: number;
  onOptionChange: (option: Options) => void;
  onClickRemoveBtn: (index: number) => void;
  onCheckedChange: (index: number) => void;
}

const Option: React.FC<OptionProps> = (props) => {
  const {
    option,
    index,
    type,
    onOptionChange,
    onClickRemoveBtn,
    onCheckedChange
  } = props;
  return (
    <OptionItem>
      <Input
        defaultValue={option.label}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onOptionChange({
            ...option,
            label: event.target.value,
            value: event.target.value
          });
        }}
        prefix={
          <MenuOutlined
            className='dropMenu'
            style={{ cursor: 'pointer', marginRight: '10px' }}
          />
        }
        suffix={
          <Space>
            <Tooltip placement='top' title='默认选中项'>
              {type === 'Checkbox' ? (
                <Checkbox
                  checked={option.checked}
                  onClick={() => onCheckedChange(option.index)}
                />
              ) : (
                <Radio
                  checked={option.checked}
                  onClick={() => onCheckedChange(option.index)}
                />
              )}
            </Tooltip>
            <Tooltip placement='top' title='删除选项'>
              <CloseCircleOutlined
                style={{ cursor: 'pointer', color: 'rgba(128,128,128.0.5)' }}
                onClick={() => onClickRemoveBtn(index)}
              />
            </Tooltip>
          </Space>
        }
        bordered={false}
        maxLength={50}
      />
    </OptionItem>
  );
};

export default Option;

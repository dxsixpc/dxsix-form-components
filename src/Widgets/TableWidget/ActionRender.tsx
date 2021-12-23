import React from 'react';
import { Button, Space, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import type { RecordType } from './type';

const ActionRender = (
  columns: ColumnsType<RecordType>,
  readonly: boolean,
  onOpenModal: (type: 'add' | 'editor', value?: RecordType) => void,
  onDelete: (deleteValue: RecordType) => void
) => {
  // 判断columns是否已有action操作属性
  const haveAction = columns?.some((item) => item.key === 'action');
  // columns中没有操作属性字段，也没有开启只读状态，则增加操作属性
  const actionRenderValue: ColumnsType<RecordType> =
    !haveAction && !readonly
      ? [
          {
            title: '操作',
            key: 'action',
            align: 'center',
            width: '100px',
            render: (record: RecordType) => (
              <Space size='small' direction='horizontal'>
                <Button
                  type='link'
                  size='small'
                  onClick={() => onOpenModal('editor', record)}
                >
                  编辑
                </Button>
                <Popconfirm
                  title='确认删除?'
                  okText='确认'
                  cancelText='取消'
                  onConfirm={() => onDelete(record)}
                >
                  <Button type='link' size='small'>
                    删除
                  </Button>
                </Popconfirm>
              </Space>
            )
          }
        ]
      : [];
  return actionRenderValue;
};

export default ActionRender;

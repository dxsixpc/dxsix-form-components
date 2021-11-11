import React from 'react';
import { Table } from 'antd';
import type { TableProps, ColumnsType } from 'antd/lib/table';
import { Wrapper } from './Styled';

export interface RecordType {
  key?: number;
  id?: string;
  [key: string]: any;
}

export interface FormTableProps extends TableProps<RecordType> {
  // 表格每行的数据列表
  value?: RecordType[];
  // 表格字段
  columns?: ColumnsType<RecordType>;
}

// 数据表格
const FormTable: React.FC<FormTableProps> = (props) => {
  const { value = [], columns = [], ...rest } = props;

  return (
    <Wrapper>
      <Table
        columns={columns}
        dataSource={value}
        locale={{ emptyText: '暂无数据' }}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormTable;

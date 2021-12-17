import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TableWidgets from '../../Widgets/TableWidget';
import type { TableWidgetProps } from '../../Widgets/TableWidget';

export default {
  title: 'Widgets/TableWidget',
  component: TableWidgets
} as Meta;

const Template: Story<TableWidgetProps> = (args) => <TableWidgets {...args} />;

export const Table = Template.bind({});

Table.args = {
  columns: [
    {
      title: '序号',
      dataIndex: 'key',
      width: '100px',
      align: 'center'
    },
    {
      title: '内容',
      dataIndex: 'message',
      align: 'center'
    }
  ]
};

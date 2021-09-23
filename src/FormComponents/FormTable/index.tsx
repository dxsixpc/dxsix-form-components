import React, { Fragment, useState } from 'react';
import { Table, Button, Modal, Space } from 'antd';
import type { TableProps, ColumnsType } from 'antd/lib/table';
import type { ModalProps } from 'antd/lib/modal';
import { uniqueId } from 'lodash';
import { Wrapper, GlobalStyle } from './Styled';
import { ComponentsRender } from '../../JsonPanel';
import type { ComponentType } from '../../JsonPanel';

export interface RecordType {
  key?: number;
  id?: string;
  [key: string]: any;
}

export interface FormTableProps {
  // 表格每行的数据列表
  value?: RecordType[];
  // 表格字段
  columns?: ColumnsType<RecordType>;
  // 弹出框表单组件列表
  componentList?: ComponentType[];
  // 是否开启只读
  readonly?: boolean;
  // 内置表格组件参数
  TableFCProps?: TableProps<RecordType>;
  // 内置弹出框组件参数
  ModalFCProps?: ModalProps;
  // 数据变更
  onChange?: (dataSource: RecordType[]) => void;
}

// 数据表格
const FormTable: React.FC<FormTableProps> = (props) => {
  const {
    value = [],
    columns = [],
    componentList,
    readonly,
    TableFCProps = {},
    ModalFCProps = {},
    onChange,
  } = props;
  // 控制是否显示表格编辑面板
  const [visibleModal, setVisibleModal] = useState(false);
  // 获取奖品列表
  const [dataSource, setDataSource] = useState<RecordType[]>(value);
  // 弹出框的默认值
  const [modalValues, setModalValues] = useState<AnyObject>({});
  // 弹出框的类型：新增或编辑
  const [tableModalType, setTableModalType] = useState<'add' | 'editor'>('add');
  // 保存表单修改后的数据
  const [changesValues, setChangesValues] = useState<RecordType>({});

  // 更新表格数据
  const update = (dataList: RecordType[]) => {
    const dataSourceValue = [...dataList];
    // 处理表单返回的奖品列表数据，使之符合表格的数据格式
    dataSourceValue.forEach((item: RecordType, index: number) => {
      // 重新给数据添加key用于表格组件渲染，序号
      dataSourceValue[index].key = index + 1;
      // 为没有id的组件添加唯一id，用于删除时找到对应的内容
      if (!item.id) dataSourceValue[index].id = uniqueId();
    });
    setDataSource(dataSourceValue);
    onChange && onChange(dataSourceValue);
    return dataSourceValue;
  };

  // 弹框表单数据改变时，保存到state中
  const onValuesChange = (_changedValues: RecordType, values: RecordType) => {
    setChangesValues(values);
  };

  //  打开编辑当前奖项面板
  const onAdd = (addValue: RecordType) => {
    // 添加数据
    update([...dataSource, addValue]);
  };

  // 删除当前项
  const onDelete = (deleteValue: RecordType) => {
    // 过滤获取没有被删除的奖品
    const newDeleteSource = dataSource.filter(
      (item) => item.id !== deleteValue.id
    );

    // 更新表格数据
    update([...newDeleteSource]);
  };

  //  打开编辑当前奖项面板
  const onEditor = (editorValue: RecordType) => {
    // 编辑奖品
    dataSource.forEach((item: RecordType, index: number) => {
      if (item.id === modalValues.id) {
        dataSource[index] = editorValue;
      }
    });
    update([...dataSource]);
  };

  // 处理弹框返回值
  const onModalSubmit = () => {
    // 关闭弹出框
    setVisibleModal(false);
    // 添加数据
    if (tableModalType === 'add') onAdd(changesValues);
    // 编辑数据
    if (tableModalType === 'editor') onEditor(changesValues);
  };

  // 打开弹出框
  const onOpenModal = (type: 'add' | 'editor', value?: RecordType) => {
    // 设置弹出框类型
    setTableModalType(type);
    // 打开添加弹出框时，设置弹出框需显示的数据
    if (type === 'add') setModalValues({});
    if (type === 'editor') setModalValues(value || {});
    // 打开弹出框
    setVisibleModal(true);
  };

  // 关闭弹出框
  const onCloseModal = () => {
    setVisibleModal(false);
  };

  // 获取columns，并添加编辑，删除操作属性
  const getColumns = () => {
    // 判断columns是否已有action操作属性
    const haveAction = columns?.some((item) => item.key === 'action');
    // columns中没有操作属性字段，也没有开启只读状态，则增加操作属性
    const actionRender: ColumnsType<RecordType> =
      !haveAction && !readonly
        ? [
            {
              title: '操作',
              key: 'action',
              align: 'center',
              width: '100px',
              render: (record: RecordType) => (
                <Space size="small" direction="horizontal">
                  <Button
                    type="link"
                    size="small"
                    onClick={() => onOpenModal('editor', record)}
                  >
                    编辑
                  </Button>
                  <Button
                    type="link"
                    size="small"
                    onClick={() => onDelete(record)}
                  >
                    删除
                  </Button>
                </Space>
              ),
            },
          ]
        : [];
    return [...columns, ...actionRender];
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Button
          className="AddButton"
          type="primary"
          onClick={() => onOpenModal('add')}
        >
          添加任务
        </Button>
        <Table
          columns={readonly ? columns : getColumns() || []}
          dataSource={dataSource}
          locale={{ emptyText: '暂无数据' }}
          {...TableFCProps}
        />
        <Modal
          className="TableModal"
          title="表格配置"
          okText="确定"
          cancelText="取消"
          zIndex={1040}
          visible={visibleModal}
          onOk={onModalSubmit}
          onCancel={onCloseModal}
          destroyOnClose
          {...ModalFCProps}
        >
          <ComponentsRender
            initialValues={modalValues}
            componentList={componentList || ([] as ComponentType[])}
            onValuesChange={onValuesChange}
          />
        </Modal>
      </Wrapper>
    </Fragment>
  );
};

export default FormTable;

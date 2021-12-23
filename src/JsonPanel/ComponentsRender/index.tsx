import React, { Fragment, useState } from 'react';
import { Form } from 'antd';
import type { FormInstance } from 'antd';
import { getComponent } from '../components';
import type { ComponentMapType, ComponentType } from '../type';
import { Wrapper } from './Styled';
import { isBoolean } from 'lodash';

interface ComponentsRenderProps {
  initialValues?: any;
  componentList: ComponentType[];
  componentMap?: ComponentMapType;
  onValuesChange: (
    changedValues: any,
    values: any,
    form: FormInstance<any>
  ) => void;
}

// 渲染组件
export const ComponentsRender: React.FC<ComponentsRenderProps> = (props) => {
  const {
    initialValues = {},
    componentList,
    componentMap = {},
    onValuesChange
  } = props;
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<AnyObject>(initialValues);

  const onFormValuesChange = (changedValues: AnyObject, values: AnyObject) => {
    // 获取当前改变字段的name值
    const [name] = Object.keys(changedValues);
    // 判断改变的字段，有没有包含children。
    const isHaveChildren = !!componentList.find((item) => item.name === name)
      ?.children;
    // 若有children，则表示此字段的值可能会用于判断渲染children
    if (isHaveChildren) setFormValues(values);
    onValuesChange(changedValues, values, form);
  };

  // 递归渲染页面
  const render = (
    // 需要渲染的组件列表
    components: ComponentType[],
    // 递归的层级
    count: number
  ): React.ReactNode => {
    return components?.map((component: ComponentType) => {
      const JsonPanelComponent =
        Reflect.get(componentMap, component.type) ||
        getComponent(component.type);
      return (
        <Fragment key={component.id}>
          <Form.Item
            key={component.id}
            className={count ? 'FormItemRender' : ''}
            initialValue={initialValues?.[component.name]}
            style={{ position: 'relative', marginLeft: `${count * 50}px` }}
            {...component}
          >
            <JsonPanelComponent
              componentprops={component}
              {...component.props}
            />
          </Form.Item>
          {component.children &&
            isBoolean(formValues?.[component.name]) &&
            formValues?.[component.name] &&
            render(component.children, count + 1)}
        </Fragment>
      );
    });
  };

  return (
    <Wrapper>
      <Form form={form} layout='vertical' onValuesChange={onFormValuesChange}>
        {render(componentList, 0)}
      </Form>
    </Wrapper>
  );
};

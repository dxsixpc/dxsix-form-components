import React, { FC, Fragment } from 'react';
import { Form } from 'antd';
import { getComponent } from '../components';
import type { ComponentMapType, ComponentType } from '../type';
import { Wrapper } from './Styled';
import { isBoolean } from 'lodash';
interface ComponentsRenderProps {
  initialValues?: any;
  componentList: ComponentType[];
  componentMap?: ComponentMapType;
  onValuesChange: (changedValues: any, values: any) => void;
}

// 渲染组件
export const ComponentsRender: FC<ComponentsRenderProps> = (props) => {
  const {
    componentList,
    initialValues = {},
    componentMap = {},
    onValuesChange
  } = props;
  const [form] = Form.useForm();

  // 递归渲染页面
  const render = (
    // 需要渲染的组件列表
    components: ComponentType[],
    // 递归的层级
    count: number
  ): React.ReactNode => {
    return components?.map((component: ComponentType) => {
      const Component =
        Reflect.get(componentMap, component.type) ||
        getComponent(component.type);
      return (
        <Fragment key={component.id}>
          <Form.Item
            key={component.id}
            name={component.name}
            label={component.label}
            className={count ? 'FormItemRender' : ''}
            initialValue={initialValues?.[component.name]}
            style={{ position: 'relative', marginLeft: `${count * 50}px` }}
          >
            <Component
              slug={initialValues?.slug || initialValues?.id}
              picture={initialValues?.picture}
              {...component.props}
            />
          </Form.Item>
          {component.children &&
            isBoolean(initialValues?.[component.name]) &&
            initialValues?.[component.name] &&
            render(component.children, count + 1)}
        </Fragment>
      );
    });
  };

  return (
    <Wrapper>
      <Form form={form} layout='vertical' onValuesChange={onValuesChange}>
        {render(componentList, 0)}
      </Form>
    </Wrapper>
  );
};

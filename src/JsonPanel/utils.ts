import { message } from 'antd';
import { isEmpty, cloneDeep } from 'lodash';
import type {
  FieldErrorType,
  PanelConfigType,
  ComponentType,
  PanelComponentsType
} from './type';

// 转换panelConfig的结构
// 从结构数据集成，转换为结构数据分离
export const integrateToSeparate = (
  panelConfig?: PanelConfigType | null,
  componentList?: ComponentType[] | null
) => {
  const panelConfigValue = cloneDeep(panelConfig);
  const componentListValue = cloneDeep(componentList);
  // 面板框架结构
  const panelFrame: PanelConfigType<'separate'> = {
    id: panelConfig?.id || '',
    type: panelConfig?.type || '',
    tabs: []
  };
  // 面板组件列表
  const panelComponents: PanelComponentsType = {};

  // 递归循环遍历json
  const loopComponents = (components: ComponentType[]) => {
    components.forEach((component) => {
      // 若有子元素，则循环后，删除子元素
      if (component.children) {
        loopComponents(component.children);
        // eslint-disable-next-line no-param-reassign
        delete component.children;
      }
      // 将组件添加到库中
      panelComponents[component.id] = component;
    });
  };

  if (panelConfigValue) {
    panelConfigValue.tabs.forEach((tab) => loopComponents(tab.componentList));
  } else if (componentListValue) {
    loopComponents(componentListValue);
  }

  // TODO 暂时只做了分离数据，后续再完善分离结构
  return {
    panelFrame,
    panelComponents
  };
};

// 整理字段验证结果，并返回验证提示
export const validatePanelValue = (
  FieldErrorObj: FieldErrorType,
  panelConfig?: PanelConfigType | null,
  componentList?: ComponentType[] | null
) => {
  if (!FieldErrorObj) return true;
  const errorField: FieldErrorType = {};

  // 遍历所有校验结果，检查是否有校验未通过的内容
  Object.entries(FieldErrorObj).forEach(([key, value]) => {
    if (value?.errors?.[0]) errorField[key] = value;
  });

  // 判断是否有校验未通过字段
  if (isEmpty(errorField)) {
    // 没有，则校验通过
    return true;
  } else {
    // 有，则遍历报错数据，并提示报错信息
    Object.entries(errorField).forEach(([key, value]) => {
      const currComponent = integrateToSeparate(
        panelConfig,
        componentList
      ).panelComponents;
      message.error(`${currComponent[key].label || key}:${value?.errors?.[0]}`);
    });
    return false;
  }
};

import { getFormComponent } from '../../FormComponents';
import { getWidget } from '../../Widgets';
import ErrorAlertWidget from './ErrorAlertWidget';

// 传入组件类型，返回对应组件
export const getComponent = (ComponentType: string) => {
  // 通用表单库里有的组价，用库里的。定制组件用本地的,都没有则返回默认input组件
  return (
    getFormComponent(ComponentType) ||
    getWidget(ComponentType) ||
    ErrorAlertWidget
  );
};

// * 这里导出定制化的小组件。没有value与onChange。不能用作表单收集的独立组件
import AlertWidget from './AlertWidget';
import ButtonWidget from './ButtonWidget';
import TableWidget from './TableWidget';

// 逐个导出所有widget
export { AlertWidget, ButtonWidget, TableWidget };

// 获取通用定制化组件
export const getWidget = (widgetType: string) => {
  const widgetMap = {
    AlertWidget,
    ButtonWidget,
    TableWidget
  };

  return Reflect.get(widgetMap, widgetType);
};

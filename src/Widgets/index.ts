// * 这里导出定制化的小组件。没有value与onChange。不能用作表单收集的独立组件
import AlertWidget from './AlertWidget';
import type { AlertWidgetProps } from './AlertWidget';
import ButtonWidget from './ButtonWidget';
import type { ButtonWidgetProps } from './ButtonWidget';
import TableWidget from './TableWidget';
import type { TableWidgetProps } from './TableWidget';

export type WidgetType = 'AlertWidget' | 'ButtonWidget' | 'TableWidget';

// 逐个导出所有widget
export { AlertWidget, ButtonWidget, TableWidget };

// 逐个导出所有组件参数类型
export type { AlertWidgetProps, ButtonWidgetProps, TableWidgetProps };

// 获取通用定制化组件
export const getWidget = (widgetType: string) => {
  const widgetMap = {
    AlertWidget,
    ButtonWidget,
    TableWidget
  };

  return Reflect.get(widgetMap, widgetType);
};

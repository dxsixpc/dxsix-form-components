import type { CheckboxValueType } from 'antd/lib/checkbox/Group';

// 每个选项配置项
export interface OptionType {
  // 选项显示的标题
  label: string;
  // 选项的值
  value: CheckboxValueType | null;
  // 当前选项是否被选中
  checked: boolean;
  // 选项的索引顺序
  index: number;
}

// 选项组件配置项
export interface OptionsConfigType {
  // 选项的类型，单选或多选
  type: 'Radio' | 'Checkbox';
  // 选项组件的默认值
  defaultValue: CheckboxValueType[] | any;
  // 选项组件的配选项配置
  options: OptionType[];
}

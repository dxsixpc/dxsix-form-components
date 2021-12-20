// * 导出组件通用类型及方法
// * 导出最小单位的通用form组件
import FormCheckbox from './FormCheckbox';
import type { FormCheckboxProps } from './FormCheckbox';
import FormColorPicker from './FormColorPicker';
import type { FormColorPickerProps } from './FormColorPicker';
import FormDatePicker from './FormDatePicker';
import type { FormDatePickerProps } from './FormDatePicker';
import FormInput from './FormInput';
import type { FormInputProps } from './FormInput';
import FormInputNumber from './FormInputNumber';
import type { FormInputNumberProps } from './FormInputNumber';
import FormMonacoEditor from './FormMonacoEditor';
import type { FormMonacoEditorProps } from './FormMonacoEditor';
import FormOptions from './FormOptions';
import type { FormOptionsProps } from './FormOptions';
import FormRadio from './FormRadio';
import type { FormRadioProps } from './FormRadio';
import FormRangePicker from './FormRangePicker';
import type { FormRangePickerProps } from './FormRangePicker';
import FormRichText from './FormRichText';
import type { FormRichTextProps } from './FormRichText';
import FormSelect from './FormSelect';
import type { FormSelectProps } from './FormSelect';
import FormSwitch from './FormSwitch';
import type { FormSwitchProps } from './FormSwitch';
import FormTextArea from './FormTextArea';
import type { FormTextAreaProps } from './FormTextArea';
export * from './utils';

export type FormType =
  | 'FormCheckbox'
  | 'FormColorPicker'
  | 'FormDatePicker'
  | 'FormInput'
  | 'FormInputNumber'
  | 'FormMonacoEditor'
  | 'FormOptions'
  | 'FormRadio'
  | 'FormRangePicker'
  | 'FormRichText'
  | 'FormSelect'
  | 'FormSwitch'
  | 'FormTextArea';

export {
  FormCheckbox,
  FormColorPicker,
  FormDatePicker,
  FormInput,
  FormInputNumber,
  FormMonacoEditor,
  FormOptions,
  FormRadio,
  FormRangePicker,
  FormRichText,
  FormSelect,
  FormSwitch,
  FormTextArea
};

export type {
  FormCheckboxProps,
  FormColorPickerProps,
  FormDatePickerProps,
  FormInputProps,
  FormInputNumberProps,
  FormMonacoEditorProps,
  FormOptionsProps,
  FormRadioProps,
  FormRangePickerProps,
  FormRichTextProps,
  FormSelectProps,
  FormSwitchProps,
  FormTextAreaProps
};

// 通过组件类型选择组件
export const getFormComponent = (componentType: string) => {
  // 通用表单组件列表
  const FormComponentMap = {
    FormCheckbox,
    FormColorPicker,
    FormDatePicker,
    FormInput,
    FormInputNumber,
    FormMonacoEditor,
    FormOptions,
    FormRadio,
    FormRangePicker,
    FormRichText,
    FormSelect,
    FormSwitch,
    FormTextArea
  };

  // 导出对应的组价，没有则默认导出输入框组件
  return Reflect.get(FormComponentMap, componentType);
};

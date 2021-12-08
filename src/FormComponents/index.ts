// * 导出组件通用类型及方法
// * 导出最小单位的通用form组件
import FormAlert from './FormAlert';
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import FormDatePicker from './FormDatePicker';
import FormInput from './FormInput';
import FormInputNumber from './FormInputNumber';
import FormRadio from './FormRadio';
import FormRangePicker from './FormRangePicker';
import FormRichText from './FormRichText';
import FormSelect from './FormSelect';
import FormSwitch from './FormSwitch';
import FormTextArea from './FormTextArea';
import FormColorPicker from './FormColorPicker';
import FormMonacoEditor from './FormMonacoEditor';
import FormOptions from './FormOptions';
import FormTable from './FormTable';
export * from './type';
export * from './utils';

export {
  FormAlert,
  FormButton,
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
  FormTable,
  FormTextArea
};

// 通过组件类型选择组件
export const getFormComponent = (componentType: string) => {
  // 通用表单组件列表
  const FormComponentMap = {
    FormAlert,
    FormButton,
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
    FormTable,
    FormTextArea
  };

  // 导出对应的组价，没有则默认导出输入框组件
  return Reflect.get(FormComponentMap, componentType);
};

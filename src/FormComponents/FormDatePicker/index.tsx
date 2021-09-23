import React from 'react';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd/lib/date-picker';
import { Wrapper } from './Styled';
import 'moment/locale/zh-cn';
import moment, { Moment } from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
moment.locale('zh-cn');

export type FormDatePickerProps = DatePickerProps & {
  onChange: (dateString: string) => void;
};

// 日期选择框
const FormDatePicker: React.FC<FormDatePickerProps> = (props) => {
  const { value, picker, onChange, ...rest } = props;

  const onValueChange = (_momentValue: Moment | null, dateString: string) => {
    onChange(dateString);
  };

  return (
    <Wrapper>
      <DatePicker
        locale={locale}
        picker={picker}
        value={value ? moment(value, 'YYYY-MM-DD HH:mm') : null}
        showTime={{ format: 'HH:mm' }}
        format='YYYY-MM-DD HH:mm'
        onChange={onValueChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormDatePicker;

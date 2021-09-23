import React from 'react';
import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';
import { Wrapper } from './Styled';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

export type FormRangePickerProps = RangePickerProps & {
  onChange: (formatString: [string, string]) => void;
};

// 日期选择框
const FormRangePicker: React.FC<FormRangePickerProps> = (props) => {
  const { value, picker, onChange, ...rest } = props;
  const { RangePicker } = DatePicker;

  const onValueChange = (_values: Any, formatString: [string, string]) => {
    onChange(formatString);
  };

  return (
    <Wrapper>
      <RangePicker
        locale={locale}
        picker={picker}
        value={[
          moment(value?.[0], 'YYYY-MM-DD HH:mm'),
          moment(value?.[1], 'YYYY-MM-DD HH:mm')
        ]}
        showTime={{ format: 'HH:mm' }}
        format='YYYY-MM-DD HH:mm'
        onChange={onValueChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormRangePicker;

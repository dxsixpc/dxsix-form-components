import { isBoolean, toLower } from 'lodash';

// 格式化参数， key转为小写，boolean值转为string
export const formatProps = (props: any) => {
  const newProps: any = {};
  Object.entries(props).map(([key, value]) => {
    newProps[toLower(key)] = isBoolean(value) ? String(value) : value;
  });
  return newProps;
};

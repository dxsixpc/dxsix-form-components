// 字符串类型的类json数据转成真正的json数据
export const toJson = (str: any) => {
  // 字符串类型的类json数据转成真正的json数据
  try {
    if (typeof JSON.parse(str) === 'object') {
      return JSON.parse(str);
    }
  } catch (e) {
    // console.log(e);
  }
  return false;
};

import { cloneDeep } from 'lodash';

// 将string类型的类json数据格式化。方便monaco编辑器显示出来
export const formatJson = (
  jsonObject: AnyObject | string,
  option?: AnyObject
) => {
  const PADDING = '    ';
  let json = cloneDeep(jsonObject);
  const options = option || {};
  let reg = null;
  let formatted = '';
  let pad = 0;

  options.newlineAfterColonIfBeforeBraceOrBracket =
    options.newlineAfterColonIfBeforeBraceOrBracket === true;
  options.spaceAfterColon = options.spaceAfterColon !== false;
  if (typeof json !== 'string') {
    json = JSON.stringify(json);
  } else {
    json = JSON.parse(json);
    json = JSON.stringify(json);
  }
  reg = /([{}])/g;
  json = json.replace(reg, '\r\n$1\r\n');
  reg = /([[\]])/g;
  json = json.replace(reg, '\r\n$1\r\n');
  reg = /(,)/g;
  json = json.replace(reg, '$1\r\n');
  reg = /(\r\n\r\n)/g;
  json = json.replace(reg, '\r\n');
  reg = /\r\n,/g;
  json = json.replace(reg, ',');
  if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
    reg = /:\r\n\{/g;
    json = json.replace(reg, ':{');
    reg = /:\r\n\[/g;
    json = json.replace(reg, ':[');
  }
  if (options.spaceAfterColon) {
    reg = /:/g;
    json = json.replace(reg, ':');
  }
  json.split('\r\n').forEach(function (node: any, index: any) {
    let i = 0;
    let indent = 0;
    let padding = '';
    if (node.match(/\{$/) || node.match(/\[$/)) {
      indent = 1;
    } else if (node.match(/\}/) || node.match(/\]/)) {
      if (pad !== 0) {
        pad -= 1;
      }
    } else {
      indent = 0;
    }
    for (i = 0; i < pad; i++) {
      padding += PADDING;
    }
    formatted += padding + node + '\r\n';
    pad += indent;
  });
  return formatted;
};

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

import { history } from '@/.umi/core/history';
import { notification, message } from 'antd';
import moment from 'moment';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export function defaultFormatResult<T extends { code: number; message?: string; data?: unknown }>(
  res: T,
) {
  if (res.code === 200) return res.data as T['data'];
  notification.error({
    message: '请求错误',
    description: res.message ?? '未知错误',
  });
  throw new Error('获取数据出错');
}

export const formatDate: (date: string | number, formatType?: string) => string = (
  date,
  formatType = 'YYYY-MM-DD',
) => {
  if (!date) return '';
  return moment(date).format(formatType);
};

export const submitAndGoback: (res: API.ApiResult) => void = (res) => {
  if (res.code === 200) {
    message.success('提交成功');
    history.goBack();
  }
};

export const submitShowSuccess: (res: API.ApiResult) => void = (res) => {
  if (res.code === 200) {
    message.success('提交成功');
  }
};

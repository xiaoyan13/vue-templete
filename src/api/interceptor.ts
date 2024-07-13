import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { ResultData, QueryData } from './types';
import qs from 'qs';

// request interceptor
const reqInterceptor = async (
  config: InternalAxiosRequestConfig<QueryData>,
) => {
  dealqueryParams(config);
  // 兼容不同类型的 contentType
  const method = config.method?.toLowerCase() || '';
  const contentType =
    config.headers?.['Content-Type'] || config.headers?.['content-type'];
  if (
    ['post', 'put'].includes(method) &&
    contentType &&
    contentType.includes('x-www-form-urlencoded')
  ) {
    config.data = qs.stringify(config.data);
  }
  return config;
};

const respInterceptor = async (response: AxiosResponse<ResultData>) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
};

/**
 * 替换url上的参数，例如 /api/get/:id
 */
function dealqueryParams(config: InternalAxiosRequestConfig<QueryData>) {
  const { url } = config;
  const urlRegExp = /:\w+/g;
  if (url && urlRegExp.test(url)) {
    const newUrl = url.replace(urlRegExp, (match: string) => {
      const variable = match.slice(1); // 例如 ':id' 中的 'id'
      const params = config.params;
      if (!params || typeof params !== 'object') {
        return match;
      }
      // 取出真实传入的 params 中的值进行替换
      const value = params[variable];
      delete params[variable];
      return value;
    });
    if (urlRegExp.test(newUrl)) {
      throw new Error('invalid request url');
    }
    config.url = newUrl;
  }
}

export { reqInterceptor, respInterceptor };

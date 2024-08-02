import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { reqInterceptor, respInterceptor } from './interceptor';
import type { ResultData } from './types';

const prefixMap = {
  development: 'https://localhost:7003',
  debug: '',
  production: 'https://www.your-domain.com',
};

const BASE_URL = prefixMap[import.meta.env.VITE_HTTP_MODE];

const baseConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 2000,
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  },
};

const service = axios.create(baseConfig);

// 请求预处理
service.interceptors.request.use(reqInterceptor, (error: unknown): unknown => {
  return Promise.reject(error);
});

// 响应预处理
service.interceptors.response.use(
  respInterceptor,
  (error: unknown): unknown => {
    return Promise.reject(error);
  },
);

export function post<T>(url: string, params?: object): Promise<ResultData<T>> {
  const res = service.post<T, ResultData<T>>(url, { params });
  return res;
}

export function del<T>(url: string, params?: object): Promise<ResultData<T>> {
  const res = service.delete<T, ResultData<T>>(url, { params });
  return res;
}

export function get<T>(url: string, params?: object): Promise<ResultData<T>> {
  const res = service.get<T, ResultData<T>>(url, { params });
  return res;
}

export function put<T>(url: string, params?: object): Promise<ResultData<T>> {
  const res = service.put<T, ResultData<T>>(url, { params });
  return res;
}

export { service };

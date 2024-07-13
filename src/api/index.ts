import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { reqInterceptor, respInterceptor } from './interceptor';

const BASE_URL = '';

const baseConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 2000,
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  },
};

const axiosInstance = axios.create(baseConfig);

// 请求预处理
axiosInstance.interceptors.request.use(
  reqInterceptor,
  (error: unknown): unknown => {
    return Promise.reject(error);
  },
);

// 响应预处理
axiosInstance.interceptors.response.use(
  respInterceptor,
  (error: unknown): unknown => {
    return Promise.reject(error);
  },
);

export { axiosInstance };

// axiosInstance.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = '/api/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  // 其他 Axios 配置项
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在请求发送之前可以进行一些处理，比如添加请求头等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在这里可以对响应数据进行处理
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // 处理401错误，比如跳转到登录页
      console.error('Unauthorized - Redirect to login page');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

// authApi.ts

import axiosInstance from '../axios';

interface LoginRequest {
  username: string;
  password: string;
  email?: string;
}

// 登录
export const login = (data: LoginRequest) => {
  return axiosInstance.post('auth', data);
};

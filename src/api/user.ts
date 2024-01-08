// authApi.ts

import axiosInstance from '../axios';
import { ResultData } from './interface';

interface LoginRequest {
  username: string;
  password: string;
  email?: string;
}

// 登录
export const login = (data: LoginRequest):Promise<ResultData<string>> => {
  return axiosInstance.post('auth', data);
};

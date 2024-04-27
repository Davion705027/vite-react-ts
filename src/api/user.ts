// authApi.ts

import axios from 'axios';
import axiosInstance from '../axios';
import { ResultData } from './interface';

interface LoginRequest {
  username: string;
  password: string;
  email?: string;
}

// 登录
export const login2 = (data: LoginRequest):Promise<ResultData<string>> => {
  return axiosInstance.post('auth', data);
};

export const login = ()=>{
  return axios.get('https://neibu.dbsportxxx1zx.com/yewu6/user/loginPanda?userName=kj&merchantCode=oubao&terminal=h5')
}

const domain = 'https://api.jcqmrbgfv.com';

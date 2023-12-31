import { createSlice } from '@reduxjs/toolkit';

export interface TokenState {
  value: number | string;
  title: string
}
const initialState: TokenState = {
  value: '',
  title: "token"
};

// 创建一个 Slice 
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    setToken: (state,{payload}) => {
      debugger
        state.value = payload.value;
    },
    // 定义一个减的方法
    removeToken: (state) => {
        state.value = '';
    },
  },
});
// 导出加减的方法
export const { setToken, removeToken } = tokenSlice.actions;

// 默认导出
export default tokenSlice.reducer;

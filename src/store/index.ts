import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice.ts";
import tokenSlice from "./features/tokenSlice.ts";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice,
    token: tokenSlice
  },
});

export default store;

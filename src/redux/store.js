import { configureStore } from "@reduxjs/toolkit";
import anyReducer from './counterSlice';


export const store = configureStore({
    reducer: {
      counter: anyReducer,
    },
  });
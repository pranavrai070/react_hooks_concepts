import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
   name:'counter',
   initialState:{
    count:1
   },
   reducers:{
    increment:(state)=>{
        state.count=state.count+1;
    },
    decrement:(state)=>{
        state.count=state.count-1;
    },
    reset:(state)=>{
        state.count=1;
    }
   }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
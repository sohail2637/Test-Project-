import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};

const counterSlice =createSlice({
  name:'management',
  initialState,
  reducers:{
    managementAction:(state,{type,payload})=>{
  console.log("test off payload",payload);
  return{...state, UpdateId:payload};
    },
    ProductList:(state,{type,payload})=>{
     return {...state, productList:payload};
    },
  }
})
export const { managementAction,ProductList } = counterSlice.actions;

export default counterSlice.reducer;

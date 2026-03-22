import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from "../api/axios"

 const userId = "69b0f75d329c4587a89239d1";
export const cartData=createAsyncThunk("cart",async()=>{
    let data=await api.get(`/cart/${userId}`)
    data=data?.data[0]?.items
 
    return data;
})

const initialState={
    item:[],
    status:undefined,
    error:null
}

const cartSlice=createSlice({
        name:"cart",
        initialState,
        extraReducers:(builder)=>{
            builder.addCase(cartData.pending,(state)=>{
                state.status="loading"
            }).addCase(cartData.fulfilled,(state,action)=>{
                state.status="success",
                state.item=action.payload
            }).addCase(cartData.rejected,(state,action)=>{
                state.status="rejected",
                state.item=action.payload.error
            })
        }
})

export default cartSlice.reducer;
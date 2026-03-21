import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import api from '../api/axios'

export const fetchData=createAsyncThunk("product",async()=>{
       let data=await api.get("/product")
       console.log("data",data.data)
       return data.data;
})


const initialState={
    item:[],
    status:undefined,
    errror:null
}

const productSlice=createSlice({
    name:"productSlice",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status="loading"
        }).addCase(fetchData.fulfilled,(state,action)=>{
             state.status="success",
             state.item=action.payload
        }).addCase(fetchData.rejected,(state,action)=>{
            state.status="failed"
            state.errror=action.error.message
        })
    }
})

export default productSlice.reducer;
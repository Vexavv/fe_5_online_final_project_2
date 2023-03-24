import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const customerSlice = createSlice({
    name : 'customer',
    initialState:{
        customer:[]
    }
})
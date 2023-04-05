import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/api";

//get data from logged customer
export const fetchGetCustomer = createAsyncThunk(
  "customer/fetchGetCustomer",
  async (_, { rejectWithValue, getState }) => {
    const stateToken = getState().isLogged.isLogged.token;
    try {
      const response = await fetch(`${BASE_URL}/customers/customer`, {
        method: "GET",
        headers: {
          Authorization: stateToken,
        },
      });
    
      const customer = await response.json();


const customerSlice = createSlice({
    name : 'customer',
    initialState:{
        customer: {}, 
              
    },
    reducers:{
        getCustomer: (state, action) =>{
    state.customer= action.payload.customer;
        }
    }, extraReducers: builder=> {
        builder      
        .addCase(fetchGetCustomer.fulfilled, (state, action) => {       
          state.customer = action.payload        
        })      

    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: {},
  },
  reducers: {
    getCustomer: (state, action) => {
      state.customer = action.payload.customer;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase( fetchGetCustomer.pending, (state, action) => {
      //    state.customer= null
      //  })
      .addCase(fetchGetCustomer.fulfilled, (state, action) => {
        state.customer = action.payload;
      });
    // .addCase(fetchGetCustomer.rejected, (state, action) => {
    //   state.customer = 'rejected'
    //
    // })
  },
});
export default customerSlice.reducer;

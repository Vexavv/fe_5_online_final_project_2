import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGetCustomer= createAsyncThunk(
    'customer/fetchGetCustomer',
    async function ( { rejectWithValue, getState }) {
      const stateToken = getState().login.isLogged.token
      try {
        const response = await fetch('/api/customers/customer', {
          method: 'GET',
          headers: {
            Authorization : stateToken

          }
        })       
       
          const customer = await response.data
          console.log(customer);
          return customer
        } catch (error) {
          return rejectWithValue(error.message)
        }
      }
    )

const customerSlice = createSlice({
    name : 'customer',
    initialState:{
        customer: {},       
    },
    reducers:{
        getCustomer: (state, action) =>{
    state.customer= action.payload.customer;
        }
    }, extraReducers: buulder=> {
        buulder
       .addCase( fetchGetCustomer.pending, (state, action) => {        
          state.customer= null
        })
        .addCase(fetchGetCustomer.fulfilled, (state, action) => {       
          state.customer = action.payload.customer         
        })
        .addCase(fetchGetCustomer.rejected, (state, action) => {
          state.customer = 'rejected'
          
        })
    }

})
export default customerSlice.reducer
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import {autorisation} from './localStorageSlice'

//  fetches
export const createAccountFetch = createAsyncThunk (
    'login/createAccountFetch',
    async (value, { rejectWithValue, dispatch })=> {
      try {
        const respons = await fetch("http://localhost:3001/api/customers", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            password: value.password,
            login: value.firstName           
          }),        
        })

        const newCustomer = await respons.json()
       
        dispatch(
            loginCustomerFetch({ loginOrEmail: newCustomer.email, password: newCustomer.password })
        )        
        return newCustomer
    } catch (error) {
        return rejectWithValue(error.message)
      }
    })
    

export const loginCustomerFetch = createAsyncThunk (
    'login/loginCustomerFetch ',
    async  (value, {rejectWithValue}, dispatch)=>{
        try{
          const loggedIn = await fetch('http://localhost:3001/api/customers/login',
             {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                  loginOrEmail: value.email,
                  password: value.password,
                })              
                
              })
              const  loggedCustomer = await loggedIn.json()
              // console.log(loggedCustomer.token);
              // dispatch(autorisation(loggedCustomer.token))
              return  loggedCustomer
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)


// slice function

const loginSlice = createSlice({
    name: 'login',
    
    initialState:{
        isLogged: false,
        customer: {
          success:false,
          token:''
        }      
    },
    reducers:{
       loguotCustomer: (state, action) => {
        state.isLogged = false
        state.customer.token = ''
        state.customer.success = false
       }
    },
     extraReducers: builder => {
      builder
      .addCase( createAccountFetch.fulfilled, (state, action) => {
        state.isLogged = false
      })     
      .addCase (createAccountFetch.rejected, (state, action) => {
        state.isLogged = false
      })
      .addCase(loginCustomerFetch.fulfilled, (state, action) => {
        state.isLogged = true
        state.customer.token = action.payload.token
        state.customer.success = action.payload.success
      })
      .addCase(loginCustomerFetch.rejected, (state, action) => {
        state.isLogged = false
        state.customer = null
      })      
    }
    
})



export default loginSlice.reducer
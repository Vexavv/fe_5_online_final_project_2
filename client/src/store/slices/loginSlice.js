import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import {autorisation} from './localStorageSlice'
//  fetches
export const createAccountFetch = createAsyncThunk (
    'login/fetchLogin',
    async function (value, { rejectWithValue, dispatch }) {
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
    'signIn/fetchSignIn',
    async  (value, { rejectWithValue}, dispatch)=>{
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
                .then(response => {
                 const  loggedCustomer =  response.json()
                 dispatch(autorisation(loggedCustomer.token))
                 return loggedCustomer
                
                })
                
              })

              return  loggedIn
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
        customer: {}      
    },
  reducers:{
    isLogin:(state, action)=>{
      state.isLogged = action.payload
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
        state.customer = action.payload.user
      })
      .addCase(loginCustomerFetch.rejected, (state, action) => {
        state.isLogged = false
        state.customer = null
      })
      // .addCase(loguotCustomerFetch.fulfilled, (state, action) => {
      //   state.isLogged = false
      //   state.customer = null
      // })
    }
    
})



export const {isLogin,
 
   isLogged} = loginSlice.actions
export default loginSlice.reducer
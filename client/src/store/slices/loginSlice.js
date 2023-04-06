import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {BASE_URL } from '../../constants/api'

// registration fetch
export const createAccountFetch = createAsyncThunk(
  'login/createAccountFetch',
  async ({ firstName, lastName, email, password }, { rejectWithValue, dispatch }) => {

    try {
      const response = await fetch(`${BASE_URL}/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          login: firstName
        }),
      })

      const customer = await response.json()
      if(response.ok) {
        dispatch(
          loginCustomerFetch({ email, password })
        )
      }
      else{
        throw new Error('Could not get data for login')
      }

      return customer
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  })

// login fetch
export const loginCustomerFetch = createAsyncThunk(
  'login/loginCustomerFetch ',
  async ({ email, password }, { rejectWithValue }) => {

    try {
      const loggedIn = await fetch(`${BASE_URL}/customers/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            loginOrEmail: email,
            password,
          })
        })

      const loggedCustomer = await loggedIn.json()
      if(loggedIn.ok){
        const savePassword = password
        console.log(savePassword);
      }
      
      return loggedCustomer
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


// slice function

const loginSlice = createSlice({
  name: 'login',

  initialState: {
    isLogged: {
      success: false,
      token: ''
    },
  },

  reducers: {
    loguotCustomer: (state, action) => {     
      state.isLogged.token = ''
      state.isLogged.success = false
    }
  },

  extraReducers: builder => {
    builder
      // .addCase(createAccountFetch.pending, (state, action) => {        
      //   state.isLogged.token = null
      //   state.isLogged.success = false
      // })
      .addCase(createAccountFetch.fulfilled, (state, action) => {       
        state.isLogged.token = null
        state.isLogged.success = false
      })
      .addCase(createAccountFetch.rejected, (state, action) => {        
        state.token = null
        state.success = false
      })
      .addCase(loginCustomerFetch.pending, (state, action) => {       
        state.isLogged.token = null
        state.isLogged.success = false
      })
      .addCase(loginCustomerFetch.fulfilled, (state, action) => {        
        state.isLogged.token = action.payload.token
        state.isLogged.success = action.payload.success
      })
      .addCase(loginCustomerFetch.rejected, (state, action) => {        
        state.isLogged.token = null
        state.isLogged.success = false
      })
      
  }
})

export const { loguotCustomer } = loginSlice.actions

export default loginSlice.reducer
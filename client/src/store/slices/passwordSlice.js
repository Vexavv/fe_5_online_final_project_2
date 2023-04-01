import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {BASE_URL } from '../../constants/api'

export const fetchChangePassword = createAsyncThunk(
    'password/fetchChangePassword',
    async function (newPassword, { rejectWithValue, getState }) {
        const stateToken = getState().isLogged.isLogged.token  
      try {
        const response = await fetch(`${BASE_URL}/customers/password`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: stateToken
          },
          body: JSON.stringify(newPassword)
        })
        if (!response.ok) {
          throw new Error('Error')
        }
        const changedPassword = await response.json()
        console.log(changedPassword);
        return changedPassword
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )
  

const passwordSlice = createSlice({
    name: 'password',
  
    initialState: {
      password: ''
    },
  
    reducers: {
        savedPassword:(state, action) => { 
            state.password= action.payload
    }    
},
extraReducers: builder => {
    builder
      .addCase(fetchChangePassword.pending, (state, action) => {        
        state.password= 'loading'
      })
      .addCase(fetchChangePassword.fulfilled, (state, action) => {       
        state.password= action.payload
      })
} 
})

export default passwordSlice
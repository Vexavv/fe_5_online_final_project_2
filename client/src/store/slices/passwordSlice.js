import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {BASE_URL } from '../../constants/api'

export const fetchChangePassword = createAsyncThunk(
    'password/fetchChangePassword',
    async function ({password, newPassword }, { rejectWithValue, getState }) {
        const stateToken = getState().isLogged.isLogged.token  
      try {
        const response = await fetch(`${BASE_URL}/customers/password`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: stateToken
          },
          body: JSON.stringify({password, newPassword})
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
      password: '', 
        newPassword: '' 
    },
  
    reducers: {
        savedPassword:(state, action) => { 
            state.newPassword= action.payload
    }    
},
extraReducers: builder => {
    builder
      .addCase(fetchChangePassword.pending, (state, action) => {        
        state.newPassword = 'loading'
      })
      .addCase(fetchChangePassword.fulfilled, (state, action) => {       
        state.newPassword = action.payload
      })
} 
})

export default passwordSlice
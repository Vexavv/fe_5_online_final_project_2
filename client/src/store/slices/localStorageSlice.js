import { createSlice } from '@reduxjs/toolkit'

const storageSlice = createSlice({

name: 'token',

initialState: {
    token : null,    
},

reducer: {
    autorisation : (state, action) => {
      state.token = action.payload
    //   localStorage.setItem('token', JSON.stringify({
    //     token: action.payload
    //   })
    // )
  }
  },
    // logOut: state => {
    //   state.token = ''
    //   localStorage.removeItem('token')
    // },
})

export const {autorisation} = storageSlice.actions
export default storageSlice.reducer
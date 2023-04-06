import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import {BASE_URL } from '../../constants/api'

const fetchForSearch = createAsyncThunk(
    'search/fetchForSearch',
    async function (query, { rejectWithValue }) {
        try {
          const response = await fetch(`${BASE_URL}/products/search`, {
            method: 'POST',
            body: JSON.stringify({
              query: query
            }),
            headers: {
              Connection: 'keep-alive',
              'Accept-Encoding': 'gzip, deflate, br',
              Accept: '*/*',
              'Content-Type': 'application/json'
            }
          })
          if (!response.ok) {
            throw new Error('Server Error!')
          }
          const result = await response.json()
          return result
        } catch (error) {
          return rejectWithValue(error.message)
        }
      }
    )

const initialState = {
    searchValues: [],
    isSearch: false,
    searchError: ''
  }

  export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(fetchForSearch.fulfilled, (state, action) => {
          state.isSearching = false
          state.searchError = ''
          state.searchValues = action.payload
        })
        .addCase(fetchForSearch.pending, state => {
          state.isSearching = true
        })
        .addCase(fetchForSearch.rejected, (state, action) => {
          state.isSearching = false
          state.searchError = action.payload
        })
    }
  })

  export default SearchSlice.reducer
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    trending: null,
    bestSellers: null,

}
export const fetchAsyncTrending = createAsyncThunk(
    'topProducts/fetchAsyncTrending',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?trendingProduct=true`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
export const fetchAsyncBestSellers = createAsyncThunk(
    'topProducts/fetchAsyncBestSellers',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?bestSeller=true`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const topProductsSlice = createSlice({
    name: 'topProducts',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncTrending.fulfilled, (state, action) => {
                state.trending = action.payload;
            })
            .addCase(fetchAsyncBestSellers.fulfilled, (state, action) => {
                state.bestSellers = action.payload;
            })

    }
})
export default topProductsSlice.reducer;
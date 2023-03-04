import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: null,
    error: '',
    display: true,

}
export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeDisplay(state, action){
            state.display = false
        },
        changeDisplayList(state, action){
            state.display = true
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })

    }
})
export const {changeDisplay, changeDisplayList} = productsSlice.actions
export default productsSlice.reducer;
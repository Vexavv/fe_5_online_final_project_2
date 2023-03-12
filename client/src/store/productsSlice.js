import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: null,
    error: '',
    display: true, // зміна від ображення карток продуктів
    activeModal: false, // модальне вікно
    selectedProductId: null, // отримання необхідного id для від ображення продукту в модальному вікні

    bestSellers: null,
    trending: null,
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
export const fetchAsyncBestSellers = createAsyncThunk(
    'products/fetchAsyncBestSellers',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?bestSeller=true`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
export const fetchAsyncTrending = createAsyncThunk(
    'products/fetchAsyncTrending',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?trendingProduct=true`);
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
        changeDisplay(state, action) {
            state.display = false
        },
        changeDisplayList(state, action) {
            state.display = true
        },
        openModal(state, action) {
            state.activeModal = true
        },
        closeModal(state, action) {
            state.activeModal = false
        },
        getElement(state, action) {
            state.selectedProductId = action.payload
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
            .addCase(fetchAsyncBestSellers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncBestSellers.fulfilled, (state, action) => {
                state.bestSellers = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncBestSellers.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncTrending.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncTrending.fulfilled, (state, action) => {
                state.trending = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncTrending.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })

    }
})
export const {
    changeDisplay,
    changeDisplayList,
    openModal,
    closeModal,
    getElement,
} = productsSlice.actions
export default productsSlice.reducer;
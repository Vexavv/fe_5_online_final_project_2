import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import productsService from "../services/productsServices";
// функція запиту продуктів

const PAGE_SIZE = 5; // кількість продуктів на сторінці

const initialState = {
    products: [],
    status: null,
    error: '',
    display: true, // зміна від ображення карток продуктів
    activeModal: false, // модальне вікно
    selectedProduct: null, // отримання необхідного id для від ображення продукту в модальному вікні


    totalPages: 4,// кількість сторінок
    page: 1,
}

export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async (page, {rejectWithValue}) => {
        try {
            const response = await productsService.getProducts(page, PAGE_SIZE);
            return response.data;

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload
        },
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
            state.selectedProduct = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.totalPages = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncProducts.rejected, (state, action) => {
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


    setPage
} = productsSlice.actions
export default productsSlice.reducer;
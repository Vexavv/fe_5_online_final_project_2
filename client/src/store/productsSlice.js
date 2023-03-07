import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: null,
    error: '',
    display: true, // зміна від ображення карток продуктів
    activeModal: false, // модальне вікно
    selectedProductId: null, // отримання необхідного id для від ображення продукту в модальному вікні
    radioButtonValue: 'all'

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
        changeRadioButton(state, action){
            state.radioButtonValue = action.payload.target.value
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

    }
})
export const {changeDisplay, changeDisplayList, openModal, closeModal, getElement,  changeRadioButton} = productsSlice.actions
export default productsSlice.reducer;
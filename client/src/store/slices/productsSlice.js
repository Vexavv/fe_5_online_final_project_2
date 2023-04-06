import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {PAGE_SIZE} from '../../constants/constants'
import axios from "axios";
import {BASE_URL} from "../../constants/api";
import {getQueryParams} from "../../helpers/apiHelpers";

const initialState = {
    data: [],
    filterBy: {
        categories: 'all',//categories selector value
        color: '',// color products selector value
        price: null,// check box filter price value
        bestSeller: '',//best products selector value
        trendingProduct: '',// trend products selector value
        sort: '',//sorting products
        minPrice: 1,// mim price products
        maxPrice: 500,// max price products
    },
    status: null,
    error: '',
    page: 1,//witch page is displayed
    displayType: true, // changing the type of product cards
    selectedProduct: null, //  the right element
    isOpen: false,// modal window
}  

export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async ({categories, page, color, bestSeller, trendingProduct, minPrice, maxPrice, sort}, {rejectWithValue}) => {
        try {
            const queryParams = getQueryParams({
                ...(categories !== "all" && {categories}), ...(bestSeller && {bestSeller}), ...(trendingProduct && {trendingProduct}), ...(color && {color}),
                minPrice,
                maxPrice,
                startPage: page,
                perPage: PAGE_SIZE, ...(sort && {sort})
            })
            const response = await axios.get(`${BASE_URL}/products/filter?${queryParams}`)
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
        // change category
        changeCategory(state, action) {
            state.filterBy.categories = action.payload.categories
        },
        // change color
        changeColor(state, action) {
            state.filterBy.color = action.payload.color
        },
        // change Best products
        changeBestSeller(state, action) {
            state.filterBy.bestSeller = action.payload.bestSeller;
        },
        //change Trending products
        changeTrending(state, action) {
            state.filterBy.trendingProduct = action.payload.trendingProduct;
        },
        // sorting products
        sortingProducts(state, action) {
            state.filterBy.sort = action.payload.sort
        },
        // set min  Price
        setMinPrice: (state, action) => {
            state.filterBy.minPrice = action.payload.minPrice;
        },
        // set max  Price
        setMaxPrice: (state, action) => {
            state.filterBy.maxPrice = action.payload.maxPrice;
        },
        //switch modal windows
        toggleModal(state, action) {
            state.isOpen = action.payload
        },
        //set page for pagination
        setPage(state, action) {
            state.page = action.payload
        },
        //getting the right element
        getElement(state, action) {
            state.selectedProduct = action.payload
        },
        // switch display card
        toggleDisplayType(state, action) {
            state.displayType = action.payload
        },

    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })
    }
})
export const {
    changeCategory,
    changeColor,
    setMinPrice,
    setMaxPrice,
    sortingProducts,
    changeBestSeller,
    changeTrending,
    toggleDisplayType,
    toggleModal,
    getElement,
    setPage,
} = productsSlice.actions
export default productsSlice.reducer;

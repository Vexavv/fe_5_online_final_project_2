import {createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios  from "axios";

import {PAGE_SIZE} from '../constants/constants'
import {BASE_URL} from "../constants/api";


const initialState = {

    bestProducts:false, //best products selector value
    trendingProducts: false,

    minPrice: 0,
    maxPrice: 100,
//     checkBoxPriceValue: {
//         one: false,
//         two: false,
//         three: false,
//         four: false
//     }, // check box filter price value
//     visibleRadioOffBest: false,// switch on/off best products
//     visibleRadioOffColor: false,// switch on/off color
//     visibleCheckBoxOff: false,//switch on/off check box
// //-------------categories filters value--------------------------------
    categories: null,


//-------------------------------------------------------------------
//     status: null,
//     error: '',


}

export const fetchAsyncProducts = createAsyncThunk(
    'productsFilters/fetchAsyncProducts',
    async (page, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/filter?startPage=${page}&perPage=${PAGE_SIZE}`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


export const fetchAsyncFilters = createAsyncThunk(
    'productsFilters/fetchAsyncFilters',
    async ( arg, {rejectWithValue}) => {
        const { radioButtonValue, page } = arg;// для пагинации второй арг
        try {
            const response = await axios.get(`${BASE_URL}/products/filter?categories=${radioButtonValue}&startPage=${page}&perPage=${PAGE_SIZE}`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


export const fetchAsyncColor = createAsyncThunk(
    'productsFilters/fetchAsyncColor',
    async ( arg, {rejectWithValue}) => {
        const { radioColorValue, page } = arg;// для пагинации второй арг
        try {
            const response = await axios.get(`${BASE_URL}/products/filter?color=${radioColorValue}&startPage=${page}&perPage=${PAGE_SIZE}`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);




const productsFiltersSlice = createSlice({
    name: 'productsFilters',
    initialState,
    reducers: {




        // categories changer

        //best filter changer
        changeRadioBest(state, action) {
            state.radioBestValue = action.payload.target.value
            if (action.payload.target.value !== '') {
                state.visibleRadioOffBest = true

            }
        },
        //color filters changer

        // check box price select
        selectCheckBoxPrice(state, action) {
            state.checkBoxPriceValue = {
                ...state.checkBoxPriceValue,
                [action.payload.target.name]: action.payload.target.checked
            }
            if (action.payload.target.name !== '') {
                state.visibleCheckBoxOff = true
            }
        },
        // hidden switch on/off best products
        hideRadioOffBest(state, action) {
            state.visibleRadioOffBest = false
            state.radioBestValue = ''
        },


        //hidden switch on/off check box price
        hideCheckBoxPrice(state, action) {
            state.visibleCheckBoxOff = false
            state.checkBoxPriceValue = {
                one: false,
                two: false,
                three: false,
                four: false
            }
        },

    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.categories = action.payload;
            })

            .addCase(fetchAsyncFilters.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(fetchAsyncColor.fulfilled, (state, action) => {
                state.categories = action.payload;
            })




    }
})


export const {
    changeRadioButton,
    changeRadioBest,
    changeRadioColor,
    hideRadioOffColor,
    hideRadioOffBest,
    hideCheckBoxPrice,
    selectCheckBoxPrice,
    changeCategory
} = productsFiltersSlice.actions
export default productsFiltersSlice.reducer;

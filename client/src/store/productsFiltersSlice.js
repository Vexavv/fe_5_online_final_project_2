import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios  from "axios";

import {PAGE_SIZE} from '../constants/constants'
import {BASE_URL} from "../constants/api";


const initialState = {
    radioButtonValue: 'products', //categories selector value
    radioBestValue: '', //best products selector value
    radioColorValue: '',// color products selector value
    checkBoxPriceValue: {
        one: false,
        two: false,
        three: false,
        four: false
    }, // check box filter price value
    visibleRadioOffBest: false,// switch on/off best products
    visibleRadioOffColor: false,// switch on/off color
    visibleCheckBoxOff: false,//switch on/off check box
//-------------categories filters value--------------------------------
    categories: null,


//-------------------------------------------------------------------
//     status: null,
//     error: '',


}

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


export const fetchAsyncChairs = createAsyncThunk(
    'productsFilters/fetchAsyncChairs',
    async (page, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?categories=chairs&startPage=${page}&perPage=${PAGE_SIZE}`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);




const productsFiltersSlice = createSlice({
    name: 'productsFilters',
    initialState,
    reducers: {

        // categories changer
        changeRadioButton(state, action) {
            state.radioButtonValue = action.payload.target.value
        },
        //best filter changer
        changeRadioBest(state, action) {
            state.radioBestValue = action.payload.target.value
            if (action.payload.target.value !== '') {
                state.visibleRadioOffBest = true

            }
        },
        //color filters changer
        changeRadioColor(state, action) {
            state.radioColorValue = action.payload.target.value
            if (action.payload.target.value !== '') {
                state.visibleRadioOffColor = true

            }
        },
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
        //hidden switch on/off color
        hideRadioOffColor(state) {
            state.visibleRadioOffColor = false
            state.radioColorValue = ''
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

            .addCase(fetchAsyncFilters.fulfilled, (state, action) => {
                state.categories = action.payload;
            })


            .addCase(fetchAsyncChairs.fulfilled, (state, action) => {
                state.chairs = action.payload;
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
    selectCheckBoxPrice
} = productsFiltersSlice.actions
export default productsFiltersSlice.reducer;

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import filtersService from "../services/filtersServices";
import PAGE_SIZE from '../constants/constants'
// const PAGE_SIZE = 5
const initialState = {
    radioButtonValue: 'products', //categories selector value
    radioBestValue: '', //best products selector value
    radioColorValue: '',// color products selector value
    checkBoxPriceValue:{
        one: false,
        two: false,
        three: false,
        four: false
    }, // check box filter price value
    visibleRadioOffBest: false,// switch on/off best products
    visibleRadioOffColor: false,// switch on/off color
    visibleCheckBoxOff: false,//switch on/off check box
//-------------categories filters value--------------------------------
    chairs: null,
    lamps: null,
    decor: null,
    furniture: null,
    sofas: null,


//-------------------------------------------------------------------

}

export const fetchAsyncFilters = createAsyncThunk(
    'productsFilters/fetchAsyncFilters',
    async (page,categories, {rejectWithValue}) => {
        try {
            const response = await filtersService.getProducts(page, PAGE_SIZE, categories);
            return response.data;

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


export const fetchAsyncChairs = createAsyncThunk(
    'productsFilters/fetchAsyncChairs',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?categories=chairs`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
export const fetchAsyncLamps = createAsyncThunk(
    'productsFilters/fetchAsyncLamps',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?categories=lamps`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const fetchAsyncDecor = createAsyncThunk(
    'productsFilters/fetchAsyncDecor',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?categories=decor`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const fetchAsyncFurniture = createAsyncThunk(
    'productsFilters/fetchAsyncFurniture',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?categories=furniture`);
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
export const fetchAsyncSofas = createAsyncThunk(
    'productsFilters/fetchAsyncSofas',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/filter?categories=sofas`);
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
            state.checkBoxPriceValue = {...state.checkBoxPriceValue,[action.payload.target.name] : action.payload.target.checked}
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
            state.checkBoxPriceValue={
                    one: false,
                    two: false,
                    three: false,
                    four: false
            }
        },

    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncChairs.fulfilled, (state, action) => {
                state.chairs = action.payload;
            })
            .addCase(fetchAsyncLamps.fulfilled, (state, action) => {
                state.lamps = action.payload;
            })
            .addCase(fetchAsyncDecor.fulfilled, (state, action) => {
                state.decor = action.payload;
            })
            .addCase(fetchAsyncFurniture.fulfilled, (state, action) => {
                state.furniture = action.payload;
            })
            .addCase(fetchAsyncSofas.fulfilled, (state, action) => {
                state.sofas = action.payload;
            })


    }
})


export const {
    changeRadioButton, changeRadioBest, changeRadioColor, hideRadioOffColor, hideRadioOffBest,hideCheckBoxPrice, selectCheckBoxPrice
} = productsFiltersSlice.actions
export default productsFiltersSlice.reducer;

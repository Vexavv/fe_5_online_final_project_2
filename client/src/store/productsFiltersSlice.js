import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {fetchAsyncProducts} from "./productsSlice";

const initialState = {
    radioButtonValue: 'products', //значення перемикача categories
    radioBestValue: '', // значення перемикача best products

    visibleRadioOff: false,


//-------------значення фільтрів категорій товарів--------------------------------
    chairs: null,
    lamps: null,
    decor: null,
    furniture: null,
    sofas: null,


//-------------------------------------------------------------------

}
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
        changeRadioButton(state, action) {
            state.radioButtonValue = action.payload.target.value
        },
        changeRadioBest(state, action) {
            state.radioBestValue = action.payload.target.value
            if (action.payload.target.value !== '') {
                state.visibleRadioOff = true
            }
        },
        hideRadioOff(state, action) {
            state.visibleRadioOff = false
            state.radioBestValue = ''
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
    changeRadioButton, changeRadioBest, hideRadioOff
} = productsFiltersSlice.actions
export default productsFiltersSlice.reducer;

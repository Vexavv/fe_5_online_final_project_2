import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {fetchAsyncProducts} from "./productsSlice";

const initialState = {
    radioButtonValue: 'all', //значення перемикача categories
//-------------значення фільтрів категорій товарів--------------------------------
    chairs: null,
    lamps: null,
    decor: null,
    furniture: null,
    sofas: null,
    // trending:null
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
// export const fetchAsyncTrending = createAsyncThunk(
//     'products/fetchAsyncTrending',
//     async (_, {rejectWithValue}) => {
//         try {
//             const response = await fetch(`http://localhost:3001/api/products/filter?trendingProduct=true`);
//             return await response.json();
//
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// );
const productsFiltersSlice = createSlice({
    name: 'productsFilters',
    initialState,
    reducers: {
        changeRadioButton(state, action) {
            state.radioButtonValue = action.payload.target.value
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

        // .addCase(fetchAsyncTrending.fulfilled, (state, action) => {
        //     state.trending = action.payload;
        // })


    }
})





export const {
    changeRadioButton
} = productsFiltersSlice.actions
export default productsFiltersSlice.reducer;

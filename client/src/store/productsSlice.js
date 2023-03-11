import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: null,
    error: '',
    display: true, // зміна від ображення карток продуктів
    activeModal: false, // модальне вікно
    selectedProductId: null, // отримання необхідного id для від ображення продукту в модальному вікні
    radioButtonValue: 'all', //значення перемикача categories
//-------------------------------------------------------------------
    chairs: null,
    lamps: null,
    decor: null,
    furniture: null,
    sofas: null,
    // trending:null
//-------------------------------------------------------------------

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
export const fetchAsyncChairs = createAsyncThunk(
    'products/fetchAsyncChairs',
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
    'products/fetchAsyncLamps',
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
    'products/fetchAsyncDecor',
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
    'products/fetchAsyncFurniture',
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
    'products/fetchAsyncSofas',
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
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeRadioButton(state, action) {
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
    changeDisplay,
    changeDisplayList,
    openModal,
    closeModal,
    getElement,
    changeRadioButton
} = productsSlice.actions
export default productsSlice.reducer;
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {PAGE_SIZE} from '../../constants/constants'
import axios from "axios";
import {BASE_URL} from "../../constants/api";

const initialState = {
    wishlist: {},
    status: null,
    error: '',
}
//------------------------------------------------додовання
export const addProductToWishlist = createAsyncThunk(
    'wishlist/addProductToWishlist',
    async (productId, { rejectWithValue, getState }) => {
        const stateToken = getState().isLogged.isLogged.token;

        try {
            const config = {
                headers: {
                    Authorization: stateToken,
                },
            };
            const url = `${BASE_URL}/wishlist`;
            const wishlist = getState().wishlist.wishlist;

            if (!wishlist) {
                // Якщо wishlist не існує, створюємо його з продуктом
                const response = await axios.post(
                    url,
                    {
                        products: [{ _id: productId }],
                    },
                    config
                );
                return response.data;
            }

            // Якщо wishlist існує, перевіряємо, чи є продукт в wishlist
            const productIds = wishlist.products.map((product) => product._id);
            if (productIds.includes(productId)) {
                throw new Error('Product already in wishlist');
            }

            // Якщо продукт не існує, додаємо його до wishlist
            const response = await axios.put(
                url,
                {
                    products: [...wishlist.products, { _id: productId }],
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



//------------------------------------------------

export const fetchAsyncWishlist = createAsyncThunk(
    'wishlist/fetchAsyncWishlist',
    async ({ method, payload }, { rejectWithValue, getState }) => {
        const stateToken = getState().isLogged.isLogged.token
        try {
            const config = {
                headers: {
                    Authorization: stateToken,
                },
            };
            const url = `${BASE_URL}/wishlist`;
            let response;
            switch (method) {
                case 'GET':
                    response = await axios.get(url, config);
                    break;
                case 'DELETE':
                    response = await axios.delete(url, config);
                    break;
                default:
                    return rejectWithValue('Invalid request method');
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



// export const fetchAsyncGetWishlist = createAsyncThunk(
//     'wishlist/fetchAsyncGetWishlist',
//     async (_, {rejectWithValue,getState }) => {
//
//         const stateToken = getState().isLogged.isLogged.token
//         console.log(stateToken)
//         try {
//             const config = {
//                 headers: {
//                     Authorization:stateToken,
//                 },
//             };
//             const response = await axios.get(`${BASE_URL}/wishlist`, config)
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//
//     }
// );
// export const fetchAsyncDeleteWishlist = createAsyncThunk(
//     'wishlist/fetchAsyncDeleteWishlist',
//     async (_, {rejectWithValue,getState }) => {
//         const stateToken = getState().isLogged.isLogged.token
//         try {
//             const config = {
//                 headers: {
//                     Authorization:stateToken,
//                 },
//             };
//             const response = await axios.delete(`${BASE_URL}/wishlist`, config)
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//
//     }
// );
//

const wishlistSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncWishlist.fulfilled, (state, action) => {
                state.wishlist = action.payload;

            })
            .addCase(addProductToWishlist.fulfilled, (state, action) => {
                state.wishlist = action.payload;
            });
            // .addCase(fetchAsyncGetWishlist.fulfilled, (state, action) => {
            //     state.wishlist = action.payload;
            //
            // })
            // .addCase(fetchAsyncDeleteWishlist.fulfilled, (state, action) => {
            //     state.wishlist = action.payload;
            //
            // })

    }

})

export const {} = wishlistSlice.actions
export default wishlistSlice.reducer;
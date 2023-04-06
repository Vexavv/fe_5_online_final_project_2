import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../constants/api";
import {getWishlistConfigWithAuthHeader, getWishlist} from "../../helpers/apiHelpers";

const url = `${BASE_URL}/wishlist`;
const initialState = {
    wishlist: {},
}

export const addProductToWishlist = createAsyncThunk(
    'wishlist/addProductToWishlist',
    async (productId, {rejectWithValue, getState}) => {
        const config = getWishlistConfigWithAuthHeader(getState);
        try {
            const wishlist = getWishlist(getState);
            if (!wishlist) {
                // if we don't have a wishlist, create it
                const response = await axios.post(
                    url,
                    {
                        products: [{_id: productId}],
                    },
                    config
                );
                return response.data;
            }
            // How the wishlist is known, checked, what is the product in the wishlist
            const productIds = wishlist.products.map((product) => product._id);
            if (productIds.includes(productId)) {
                throw new Error('Product already in wishlist');
            }
            // If the product is not available, add it to the wishlist
            const response = await axios.put(
                url,
                {
                    products: [...wishlist.products, {_id: productId}],
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const removeProductFromWishlist = createAsyncThunk(
    'wishlist/removeProductFromWishlist',
    async (productId, {rejectWithValue, getState}) => {
        const config = getWishlistConfigWithAuthHeader(getState);
        try {
            const wishlist = getWishlist(getState);
            if (!wishlist) {
                throw new Error('Wishlist does not exist');
            }
            // Filter the list of products based on productId
            const filteredProducts = wishlist.products.filter(
                (product) => product._id !== productId
            );
            // Like the list of products is empty, it looks like a wishlist
            if (filteredProducts.length === 0) {
                const response = await axios.delete(url, config);
                return response.data;
            }
            // As long as the product list is not empty, the wishlist is updated
            const response = await axios.put(
                url,
                {
                    products: filteredProducts,
                },
                config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }

);
export const fetchAsyncWishlist = createAsyncThunk(
    'wishlist/fetchAsyncWishlist',
    async ({method, payload}, {rejectWithValue, getState}) => {
        const config = getWishlistConfigWithAuthHeader(getState);
        try {
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
            })
            .addCase(removeProductFromWishlist.fulfilled, (state, action) => {
                state.wishlist = action.payload;
            });
    }

})
export default wishlistSlice.reducer;
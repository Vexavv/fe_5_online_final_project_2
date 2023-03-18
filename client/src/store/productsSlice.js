import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {PAGE_SIZE} from '../constants/constants'
import axios from "axios";
import {BASE_URL} from "../constants/api";

const initialState = {
    data: [],
    filterBy: {
        categories: 'all',//categories selector value
        color: '',// color products selector value
        price: null,// check box filter price value
        topProducts: '',//best products selector value
    },
    status: null,
    error: '',
    page: 1,//witch page is displayed
    display: true, // changing the type of product cards
    selectedProduct: null, //  the right element
    isOpen: false,// modal window
}

function getQueryParams(params) {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .filter((key) => params[key] !== undefined)
        .map((key) => esc(key) + '=' + esc(params[key]))
        .join('&');
}

export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async ({categories,page,color}, {rejectWithValue}) => {
        try {
            const queryParams = getQueryParams({ ...(categories !== "all"  && { categories }), ...(color && { color }), startPage: page, perPage: PAGE_SIZE })
            console.log(queryParams)
            const response = await axios.get(`${BASE_URL}/products/filter?${queryParams}`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);



// export const fetchAsyncProducts = createAsyncThunk(
//     'products/fetchAsyncProducts',
//     async (page, {rejectWithValue}) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/products/filter?startPage=${page}&perPage=${PAGE_SIZE}`)
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// );

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
        // change topProducts
        changeTopProducts(state, action) {
            state.filterBy.topProducts = action.payload.topProducts
        },
        // change Price         questions for Rostislav
        changePrice(state, action) {
            state.filterBy.price = action.payload.price  /*{...state.filterBy.price,[action.payload.price]: action.payload.price}*/
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
        toggleDisplay(state, action ){
             state.display = action.payload
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
    changeTopProducts,
    changePrice,

    toggleDisplay,
    toggleModal,
    getElement,
    setPage,

} = productsSlice.actions
export default productsSlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
//
// export const fetchPostsByCategoryAndColor = createAsyncThunk(
//     "posts/fetchByCategoryAndColor",
//     async ({ category, color }, { rejectWithValue }) => {
//         try {
//             const response1 = await axios.get(`https://api.example.com/posts?category=${category}`);
//             const response2 = await axios.get(`https://api.example.com/posts?color=${color}`);
//             return {
//                 byCategory: response1.data,
//                 byColor: response2.data,
//             };
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );
//
// const postsSlice = createSlice({
//     name: "posts",
//     initialState: {
//         data: {
//             byCategory: [],
//             byColor: [],
//         },
//         status: "idle",
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchPostsByCategoryAndColor.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(fetchPostsByCategoryAndColor.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.data.byCategory = action.payload.byCategory;
//                 state.data.byColor = action.payload.byColor;
//             })
//             .addCase(fetchPostsByCategoryAndColor.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.payload;
//             });
//     },
// });
//
// export default postsSlice.reducer;

// import { useDispatch } from "react-redux";
// import { fetchPostsByCategoryAndColor } from "./postsSlice";
//
// const dispatch = useDispatch();
//
// const handleFetchPosts = async () => {
//     const promises = [
//         dispatch(fetchPostsByCategoryAndColor({ category: "technology", color: "blue" })),
//         dispatch(fetchPostsByCategoryAndColor({ category: "food", color: "red" })),
//     ];
//     await Promise.all(promises);
//     console.log("Both requests are done!");
// };


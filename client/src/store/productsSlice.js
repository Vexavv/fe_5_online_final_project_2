import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {PAGE_SIZE} from '../constants/constants'
import axios  from "axios";
import {BASE_URL} from "../constants/api";

const initialState = {
    products: null,
    status: null,
    error: '',
    display: true, // changing the type of product cards
    activeModal: false, // modal window
    selectedProduct: null, //  the right element
    page: 1,//witch page is displayed

}


//request products
export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async (page, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/filter?startPage=${page}&perPage=${PAGE_SIZE}`)
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

        //set page for pagination
        setPage(state, action) {
            state.page = action.payload
        },
        changeDisplay(state, action) {
            state.display = false
        },
        // changing card
        changeDisplayList(state, action) {
            state.display = true
        },
        //open modal window
        openModal(state, action) {
            state.activeModal = true
        },
        //close modal window
        closeModal(state, action) {
            state.activeModal = false
        },
        //getting the right element
        getElement(state, action) {
            state.selectedProduct = action.payload
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



            // .addCase(fetchAsyncFilters.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(fetchAsyncFilters.fulfilled, (state, action) => {
            //     state.categories = action.payload;
            //     state.status = 'loaded';
            // })
            // .addCase(fetchAsyncFilters.rejected, (state, action) => {
            //     state.error = action.payload;
            //     state.status = 'loaded';
            // })
    }
})
export const {
    changeDisplay,
    changeDisplayList,
    openModal,
    closeModal,
    getElement,
    setPage,



    changeRadioButton



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


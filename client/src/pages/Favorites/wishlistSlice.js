// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// // fetch('http://localhost:3001/api/products').then(response => response.json()).catch(err => console.log(err))

// // export const createWishlist = createAsyncThunk('wishlist/createWishlist', async () => {
// //   return fetch('/api/wishlist', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //       name: 'My Wishlist',
// //       items: ['item1', 'item2', 'item3']
// //     })
// //   })
// //   .then(response => {
// //     if (!response.ok) {
// //       throw new Error('Network response was not ok');
// //     }
// //     return response.json();
// //   })
// //   .then(data => {
// //     console.log('Wishlist created:', data);
// //   })
// //   .catch(error => {
// //     console.error('Error creating wishlist:', error);  
// //   });
// // });
// // export const wishlistSlice = createSlice({
// //   name: 'wishlist',
// //   initialState: {
// //     loading: false,
// //     error: null,
// //     wishlist: null
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(createWishlist.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(createWishlist.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.error = null;
// //         state.wishlist = action.payload;
// //       })
// //       .addCase(createWishlist.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload;
// //         state.wishlist = null;
// //       });
// //   }
// // });

// // export default wishlistSlice.reducer;

// export const checkWishlistExistence = async () => {
//   try {
//     const response = await fetch('/api/wishlist');
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     }
//     return null;
//   } catch (error) {
//     console.error('Error checking wishlist existence:', error);
//     return null;
//   }
// };

//   export const createWishlist = createAsyncThunk('wishlist/createWishlist', async () => {
//     try {
//       const existingWishlist = await checkWishlistExistence();
//       if (existingWishlist) {
//         return existingWishlist;
//       }
//       const response = await axios.post('/api/wishlist', {
//         name: 'My Wishlist',
//         items: ['item1', 'item2', 'item3']
//       });
  
//       console.log('Wishlist created:', response.data);
  
//       return response.data;
//     } catch (error) {
//       console.error('Error creating wishlist:', error);
  
//       throw error;
//     }
//   });
  
//   export const wishlistSlice = createSlice({
//     name: 'wishlist',
//     initialState: {
//       loading: false,
//       error: null,
//       wishlist: null
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(createWishlist.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(createWishlist.fulfilled, (state, action) => {
//           state.loading = false;
//           state.error = null;
//           state.wishlist = action.payload;
//         })
//         .addCase(createWishlist.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//           state.wishlist = null;
//         });
//     }
//   });
  
//   export default wishlistSlice.reducer;
  
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {PAGE_SIZE} from '../../constants/constants'
import axios from "axios";
import {BASE_URL} from "../../constants/api";
// import store from '../store/index.js'


// const state = store.getState();
// const token = state.token;
// console.log(token)

// const state = store.getState();
// console.log(state)
const initialState = {
    wishlist: {},
    status: null,
    error: '',
}

export const createWishlist = createAsyncThunk(
    'wishlist/fetchAsyncProducts',
    async (_, {rejectWithValue,getState }) => {

        const stateToken = getState().isLogged.isLogged.token
        console.log(stateToken)
        try {
            const config = {
                headers: {
                    Authorization:stateToken,
                },
            };
            const response = await axios.get(`${BASE_URL}/wishlist`, config)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }

    }
);

const wishlistSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createWishlist.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createWishlist.fulfilled, (state, action) => {
                state.wishlist = action.payload;
                state.status = 'loaded';
            })
            .addCase(createWishlist.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })
    }

})

export const {} = wishlistSlice.actions
export default wishlistSlice.reducer;
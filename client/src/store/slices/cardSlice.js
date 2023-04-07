import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/api";
const initialState = {
  products: [],
};
export const fetchGetBasket = createAsyncThunk(
  "customer/fetchGetBasket",
  async (_, { rejectWithValue, getState }) => {
    const stateToken = getState().isLogged.isLogged.token;
    try {
      const response = await fetch(`${BASE_URL}/cart`, {
        method: "GET",
        headers: {
          Authorization: stateToken,
        },
      });
      const productBasket = await response.json();

      return productBasket.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addToCard = createAsyncThunk(
  "cart/addToCard",
  async (item, { rejectWithValue, getState }) => {
    const stateToken = getState().isLogged.isLogged.token;

    try {
      const response = await fetch(`${BASE_URL}/cart/${item._id}`, {
        method: "PUT",

        headers: {
          Authorization: stateToken,
        },
      });
      const productAddBasket = await response.json();

      return productAddBasket.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const decreasCard = createAsyncThunk(
  "cart/decreasCard",
  async (item, { rejectWithValue, getState }) => {
    const stateToken = getState().isLogged.isLogged.token;

    try {
      const response = await fetch(`${BASE_URL}/cart/product/${item._id}`, {
        method: "DELETE",
        headers: {
          Authorization: stateToken,
        },
      });
      const decreasCard = await response.json();
      return decreasCard.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deletCard = createAsyncThunk(
  "cart/deletCard",
  async (item, { rejectWithValue, getState }) => {
    const stateToken = getState().isLogged.isLogged.token;

    try {
      const response = await fetch(`${BASE_URL}/cart/${item._id}`, {
        method: "DELETE",
        headers: {
          Authorization: stateToken,
        },
      });
      const decreaseCard = await response.json();
      return decreaseCard.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const cardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      const isAdded = state.products.find(
        (item) => item.product._id === action.payload.product._id
      );

      console.log(isAdded, action);
      if (isAdded) {
        return;
      }
      state.products = [...state.products, action.payload];
    },

    removeItemBasket(state, action) {
      console.log(state.products);
      state.products = state.products.filter(
        (item) => item.product._id !== action.payload.id
      );
    },

    increaseCard(state, action) {
     
      state.products = state.products.map((item) => {
        if (item.product._id === action.payload.id) {
          item.product.amount += 1;
          item.product.totalPrice =
            item.product.amount * item.product.currentPrice;
        }
        return item;
      });
    },

    decreaseCard(state, action) {
     
      state.products = state.products.map((item) => {
        if (item.product._id === action.payload.id) {
          if (item.product.amount === 1) {
            item.product.amount = 1;
            item.product.totalPrice = item.product.currentPrice;
          } else {
            item.product.amount -= 1;
            item.product.totalPrice =
              item.product.amount * item.product.currentPrice;
          }
        }
        return item;
      });
    },
    resetCard(state) {
      state.products = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBasket.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addToCard.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deletCard.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(decreasCard.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});
export const {
  addCard,
  resetCard,
  removeCard,
  clearCard,
  removeItemBasket,
  increaseCard,
  decreaseCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;

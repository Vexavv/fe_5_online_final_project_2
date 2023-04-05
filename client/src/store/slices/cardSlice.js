import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {


    addCard(state, action) {
      state.products = [...state.products, action.payload];
    },

    removeItemBasket(state, action) {
      state.products = state.products.filter(
        (item) => item._id !== action.payload.id
      );
    },

    increaseCard(state, action) {
      console.log(action.payload);
      state.products = state.products.map((item) => {
        if (item._id === action.payload.id) {
          item.amount += 1;
          item.totalPrice = item.amount * item.currentPrice;
        }
        return item;
      });
    },

    decreaseCard(state, action) {
      state.products = state.products.map((item) => {
        if (item._id === action.payload.id) {
          if (item.amount === 1) {
            item.amount = 1;
            item.totalPrice = item.currentPrice;
          } else {
            item.amount -= 1;
            item.totalPrice = item.amount * item.currentPrice;
          }
        }
        return item;
      });
    },
  },
});
export const {
  addCard,
  removeCard,
  clearCard,
  removeItemBasket,
  increaseCard,
  decreaseCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;

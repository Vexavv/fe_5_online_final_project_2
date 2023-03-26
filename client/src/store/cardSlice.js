import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const item = action.payload;
      const existingItem = state.products.find((i) => i._id === item._id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.products.push({ ...item, quantity: 1 });
      }
    },

    removeCard: (state, action) => {
      const _id = action.payload;
      const existingItem = state.products.find((i) => i._id === _id);
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((i) => i._id !== _id);
      } else {
        existingItem.quantity--;
      }
    },
    clearCard: (state) => {
      state.products = [];
    },

    // addCard(state, action) {
    //   state.products = [...state.products, action.payload];
    // },

    // removeItemBasket(state, action) {
    //   state.products = state.products.filter(
    //     (item) => item._id !== action.payload.id
    //   );
    // },

    // increaseCard(state, action) {
    //   console.log(action.payload);
    //   state.products = state.products.map((item) => {
    //     if (item._id === action.payload.id) {
    //       item.amount += 1;
    //       item.totalPrice = item.amount * item.currentPrice;
    //     }
    //     return item;
    //   });
    // },

    // decreaseCard(state, action) {
    //   state.products = state.products.map((item) => {
    //     if (item._id === action.payload.id) {
    //       if (item.amount === 1) {
    //         item.amount = 1;
    //         item.totalPrice = item.currentPrice;
    //       } else {
    //         item.amount -= 1;
    //         item.totalPrice = item.amount * item.currentPrice;
    //       }
    //     }
    //     return item;
    //   });
    // },
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

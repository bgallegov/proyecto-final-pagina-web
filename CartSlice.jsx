import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addItem: (state, action) => {
      const product = state.find(item => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const product = state.find(item => item.id === action.payload.id);

      if (product) {
        product.quantity = action.payload.quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

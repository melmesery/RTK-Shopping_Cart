import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { list: [], total: 0 },
  reducers: {
    addToCart(state, action) {
      const check = state.list.findIndex(
        (product) => product._id === action.payload._id
      );
      if (check !== -1) {
        state.list[check].quantity += action.payload.quantity;
      } else {
        state.list.push(action.payload);
      }
      state.total = state.list.reduce(
        (sum, product) => sum + product?.price * product?.quantity,
        0
      );
    },
    updateQuantity(state, action) {
      const check = state.list.findIndex(
        (product) => product._id === action.payload._id
      );
      if (check !== -1) {
        state.list[check].quantity = action.payload.quantity;
      }
      state.total = state.list.reduce(
        (sum, product) => sum + +product?.price * product?.quantity,
        0
      );
    },
    removeItem(state, action) {
      state.list = state.list.filter(
        (product) => product._id !== action.payload._id
      );
      state.total = state.list.reduce(
        (sum, product) => sum + product?.price * product?.quantity,
        0
      );
    },
  },
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

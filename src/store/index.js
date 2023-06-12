import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import ProductSlice from "./ProductSlice.js";

const store = configureStore({
  reducer: {
    product: ProductSlice,
    cart: CartSlice,
  },
});

export default store;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        "https://shopping-cart-api-alpha.vercel.app/product"
      );
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { myProducts: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myProducts = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
import {popularProducts} from "@/Data/Data";

const initialState = {
  items: popularProducts,
};

export const popularProductsSlice = createSlice({
  name: "popularCart",
  initialState,
  reducers: {},
});

export default popularProductsSlice.reducer;

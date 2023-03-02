import {createSlice} from "@reduxjs/toolkit";
import {discountProducts} from "@/Data/Data";

const initialState = {
  items: discountProducts,
};

export const discountProductsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   
  },
});


export default discountProductsSlice.reducer;

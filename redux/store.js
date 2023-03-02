import {configureStore} from "@reduxjs/toolkit";
import discountProductsReducer from "./discountProducts/discountProductsSlice";
import popularProductsReducer from "./popularProducts/popularProductsSlice";
import cartReducer from "./cart/cartSlice";
import toggleReducer from "./toggle/toggleSlice";

export const store = configureStore({
  reducer: {
    allDiscountProduct: discountProductsReducer,
    allPopularProduct: popularProductsReducer,
    cart: cartReducer,
    toggle: toggleReducer,
  },
});

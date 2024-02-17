import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import ProductSlice from "./Slices/ProductSlice";
export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        products:ProductSlice
       
    }
});
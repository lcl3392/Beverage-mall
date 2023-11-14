import { configureStore } from "@reduxjs/toolkit";
import cart from './modules/cartSlice' 
import customer from "./modules/customerSlice";

export const store = configureStore({
    reducer: {
        cart,
        customer
    }
})
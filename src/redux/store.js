import { configureStore } from "@reduxjs/toolkit";
import like from "./reducers/like";
import cart from "./reducers/cart";

export const store = configureStore({
    reducer: {
        like,
        cart
    }
})
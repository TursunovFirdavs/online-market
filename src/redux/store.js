import { configureStore } from "@reduxjs/toolkit";
import like from "./reducers/like";
import cart from "./reducers/cart";
import { saveState } from "./storage/storage";

export const store = configureStore({
    reducer: {
        like,
        cart
    }
})

store.subscribe(() => {
    saveState('cart', store.getState().cart)
    saveState('like', store.getState().like)
})
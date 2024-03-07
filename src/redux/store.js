import { configureStore } from "@reduxjs/toolkit";
import { likeReducer } from "./reducers/like";

export const store = configureStore({
    reducer: {
        likeReducer
    }
})
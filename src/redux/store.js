import { configureStore } from "@reduxjs/toolkit";
import like from "./reducers/like";

export const store = configureStore({
    reducer: {
        like
    }
})
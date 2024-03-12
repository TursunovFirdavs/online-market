import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const checked = state.cart.find(item => item.id === action.payload.id)
            if(!checked){
                return {...state, cart: [...state.cart,
                    {
                        ...action.payload,
                        productCount: 1,
                        overalPrice: action.payload.price
                    }
                ]}
            }
        },
        removeFromCart: (state, action) => {
            const checked = state.cart.filter(item => item.id !== action.payload.id)
            return {...state, cart: checked}
        }
    }
})

export default cartReducer.reducer

export const { addToCart, removeFromCart } = cartReducer.actions
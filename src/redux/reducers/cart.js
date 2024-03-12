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
                        overalDiscounted: action.payload.discounted,
                        overalPrice: action.payload.price
                    }
                ]}
            }
        },
        removeFromCart: (state, action) => {
            const checked = state.cart.filter(item => item.id !== action.payload.id)
            return {...state, cart: checked}
        },
        toggleAmount: (state, action) => {
            if(action.payload.type == 'add'){
                const newCart = state.cart.map(item => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            productCount: item.productCount + 1,
                            overalPrice: (item.productCount + 1) * item.price,
                            overalDiscounted: (item.productCount + 1) * item.discounted
                        }
                    }
                    return item
                })
                return {...state, cart: newCart}
            }
            else if(action.payload.type == 'remove') {
                const newCart = state.cart.map(item => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            productCount: item.productCount - 1,
                            overalPrice: (item.productCount - 1) * item.price,
                            overalDiscounted: (item.productCount - 1) * item.discounted
                        }
                    }
                    return item
                })
                return {...state, cart: newCart}
            }
        }
    }
})

export default cartReducer.reducer

export const { addToCart, removeFromCart, toggleAmount } = cartReducer.actions
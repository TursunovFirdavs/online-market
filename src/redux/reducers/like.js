import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../storage/storage";

const initialState = loadState('like') || {
    like: []
}

const likeReducer = createSlice({
    name: 'like',
    initialState,
    reducers: {
        liked: (state, action) => {
            const checked = state.like.find(item => item.id === action.payload.id)
            if(!checked){
                return {...state, like: [action.payload, ...state.like]}
            }
            return state
        },
        dislike: (state, action) => {
            const checked = state.like.filter(item => item.id !== action.payload.id)
            if(checked) {
                return {...state, like: checked}
            }
            return state
        }
    }
})


export default likeReducer.reducer

export const { liked, dislike } = likeReducer.actions
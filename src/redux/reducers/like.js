import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: []
}

const likeReducer = createSlice({
    name: 'like',
    initialState,
    reducers: {
        liked: (state, action) => {
            const checked = state.like.find(item => item.id === action.payload)
            if(!checked){
                return {...state, like: [...state.like, action.payload]}
            }
        },
        dislike: (state, action) => {
            const checked = state.like.filter(item => item.id !== action.payload)
            if(checked) {
                return {...state, like: checked}
            }
        }
    }
})


export default likeReducer.reducer

export const { liked, dislike } = likeReducer.actions
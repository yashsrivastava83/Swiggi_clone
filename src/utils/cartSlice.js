
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        items:["Chilli paneer", "egg roll"],
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeitem: (state, action)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            state.items=[];
        },
    },
});
export const  {addItem, removeitem, clearCart}=cartSlice.actions;
export default cartSlice.reducer;
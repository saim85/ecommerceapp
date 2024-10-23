import { createSlice } from "@reduxjs/toolkit";


const initialState =      JSON.parse(localStorage.getItem('cart'))  ?? [];

export const cartSlice = createSlice({
   name : 'cart',
   initialState,

   reducers:{
    addtoCart(state , action){
      state.push(action.payload)
    },

    deleteFormcart (state , action){
        return state.filter((item) => item.id != action.payload.id)
    }
   }
})


export const {addtoCart , deleteFormcart} = cartSlice.actions;

export default cartSlice.reducer;
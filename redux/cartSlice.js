import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({


    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },


    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },

        removeProduct: (state, action) => {
            state.products.shift(action.payload);
            state.quantity -= 1;
            state.total += action.payload.price * action.payload.quantity;
        },

        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;

            //state = initialState;
        },
    },
});

export const { addProduct, reset, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
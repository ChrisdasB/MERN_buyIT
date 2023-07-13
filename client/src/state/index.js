import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    recentlyViewed: [],
    shoppingCart: [],
    currentItem: {},
    checkoutCart: [],
    checkoutAmount: 0.0
}

export const visitorSlice =  createSlice({
    name: "visitor",
    initialState,
    reducers: {
        addRecentlyViewed: (state, action) => {
            state.recentlyViewed += action.payload.recentlyViewed;
        },
        addShoppingCart: (state, action) => {
            state.shoppingCart.push(action.payload.item);
        },
        removeShoppingCart: (state, action) => {
            state.shoppingCart -= action.payload.item;
        },
        setCurrentItem: (state, action) => {
            state.currentItem = action.payload.item;
        },
        setCheckoutCart: (state, action) => {
            state.checkoutCart = action.payload.cart;
        },
        setCheckoutAmount: (state, action) => {
            state.checkoutAmount = action.payload.amount
        }

    }
})

export const {addRecentlyViewed, addShoppingCart, removeShoppingCart, setCurrentItem, setCheckoutCart, setCheckoutAmount} = visitorSlice.actions;
export default visitorSlice.reducer;
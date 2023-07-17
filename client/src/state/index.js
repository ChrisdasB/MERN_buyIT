import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    recentlyViewed: [],
    shopItems:[],
    shoppingCart: [],
    currentItem: {},
    checkoutCart: [],
    checkoutAmount: 0.0,
    showItemRemoved: false
}

export const visitorSlice =  createSlice({
    name: "visitor",
    initialState,
    reducers: {
        setShowItemRemoved: (state, action) => {
            console.log("Showing message!");
            state.showItemRemoved = action.payload.value;            
        },
        addRecentlyViewed: (state, action) => {
            state.recentlyViewed += action.payload.recentlyViewed;
        },
        addShoppingCart: (state, action) => {

            for(var i = 0; i < state.shoppingCart.length; i++)
            {
                if(state.shoppingCart[i]["id"] === action.payload.item["id"])
                {
                    state.shoppingCart[i]["quantity"] += action.payload.item["quantity"];
                    return;
                }
            }

            state.shoppingCart.push(action.payload.item);
        },
        removeShoppingCart: (state, action) => {
            console.log("REmoving here also!");
            var tempCart = [...state.shoppingCart];
            for(var i = 0; i < state.shoppingCart.length; i++)
            {                
                if(state.shoppingCart[i]["_id"] === action.payload.id)
                {
                    tempCart.pop(state.shoppingCart[i]["_id"]);
                    console.log(tempCart);
                    state.shoppingCart = tempCart;
                    return;
                }
            }
        },
        resetShoppingCart: (state, action) => {
            state.shoppingCart = [];
        },
        setCurrentItem: (state, action) => {
            state.currentItem = action.payload.item;            
        },
        setCheckoutCart: (state, action) => {
            state.checkoutCart = action.payload.cart;
        },
        setCheckoutAmount: (state, action) => {
            state.checkoutAmount = action.payload.amount;
        },
        setShopItems: (state, action) => {
            state.shopItems = action.payload.items;
        }

    }
})

export const {resetShoppingCart, setShowItemRemoved, addRecentlyViewed, addShoppingCart, removeShoppingCart, setCurrentItem, setCheckoutCart, setCheckoutAmount, setShopItems} = visitorSlice.actions;
export default visitorSlice.reducer;
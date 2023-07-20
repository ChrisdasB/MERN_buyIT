import { createSlice } from "@reduxjs/toolkit";

/* Initial states for redux-store */
const initialState = {
  shopItems: [],
  shoppingCart: [],
  checkoutAmount: 0.0,
  showItemRemoved: false,
};

/* Create redux slice */
export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    /* Controls the itemRemoved message */
    setShowItemRemoved: (state, action) => {
      state.showItemRemoved = action.payload.value;
    },
    /* Adds an item to the shopping cart */
    addShoppingCart: (state, action) => {
      for (var i = 0; i < state.shoppingCart.length; i++) {
        if (state.shoppingCart[i]["id"] === action.payload.item["id"]) {
          state.shoppingCart[i]["quantity"] += action.payload.item["quantity"];
          return;
        }
      }

      state.shoppingCart.push(action.payload.item);
    },
    /* Removes an item from the shopping cart */
    removeShoppingCart: (state, action) => {
      var tempCart = [...state.shoppingCart];
      for (var i = 0; i < state.shoppingCart.length; i++) {
        if (state.shoppingCart[i]["_id"] === action.payload.id) {
          tempCart.pop(state.shoppingCart[i]["_id"]);
          state.shoppingCart = tempCart;
          return;
        }
      }
    },
    /* Resets the shopping cart to empty array */
    resetShoppingCart: (state) => {
      state.shoppingCart = [];
    },
    /* Sets the shopping cart to given value */
    setShopItems: (state, action) => {
      state.shopItems = action.payload.items;
    },
  },
});

export const {
  resetShoppingCart,
  setShowItemRemoved,
  addShoppingCart,
  removeShoppingCart,
  setShopItems,
} = visitorSlice.actions;
export default visitorSlice.reducer;

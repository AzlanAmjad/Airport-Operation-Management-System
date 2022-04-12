import { createSlice } from "@reduxjs/toolkit";

const passenger = localStorage.getItem("passenger") === "true";

const initialState = passenger
  ? { cart: true, quantity: 0, items: [] }
  : { cart: false, quantity: 0, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      if (state.cart === true) {
        state.items.push(action.payload);
        state.quantity += 1;
      }
    },
    remove(state, action) {
      if (state.quantity != 0 && state.cart === true) {
        const index = state.items.findIndex((object) => {
          return object.id === action.payload.id;
        });
        if (index != -1) {
          state.items.splice(index, 1);
          state.quantity -= 1;
        }
      }
    },
    activate(state, action) {
      state.cart = true;
    },
    deactivate(state, action) {
      state.cart = false;
      state.items = [];
      state.quantity = 0;
    },
    empty(state, action) {
      state.items = [];
      state.quantity = 0;
    },
  },
});

// actions
export const { add, remove, activate, deactivate, empty } = cartSlice.actions;

// reducer
export default cartSlice.reducer;

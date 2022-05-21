import { createSlice } from "@reduxjs/toolkit";

const passenger = localStorage.getItem("passenger") === "true";

const initialState = passenger
  ? { cart: true, total: 0, quantity: 0, items: [] }
  : { cart: false, total: 0, quantity: 0, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      if (state.cart === true) {
        if (
          state.items.findIndex((item) => {
            return (
              item.id === action.payload.id && item.type === action.payload.type
            );
          }) === -1
        ) {
          state.items.push(action.payload);
          state.quantity += 1;
          state.total += parseFloat(action.payload.price);
        }
      }
    },
    remove(state, action) {
      if (state.quantity !== 0 && state.cart === true) {
        const index = state.items.findIndex((object) => {
          return (
            object.id === action.payload.id &&
            object.type === action.payload.type
          );
        });
        if (index !== -1) {
          state.items.splice(index, 1);
          state.quantity -= 1;
          state.total -= parseFloat(action.payload.price);
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
      state.total = 0;
    },
    empty(state, action) {
      state.items = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

// actions
export const { add, remove, activate, deactivate, empty } = cartSlice.actions;

// reducer
export default cartSlice.reducer;

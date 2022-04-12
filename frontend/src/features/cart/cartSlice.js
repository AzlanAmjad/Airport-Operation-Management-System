import { createSlice } from "@reduxjs/toolkit";

const initialState = { quantity: 0, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
      state.quantity += 1;
    },
    remove(state, action) {
      if (state.quantity != 0) {
        const index = state.items.findIndex((object) => {
          return object.id === action.payload.id;
        });
        if (index != -1) {
          state.items.splice(index, 1);
          state.quantity -= 1;
        }
      }
    },
  },
});

// actions
export const {} = cartSlice.actions;

// reducer
export default cartSlice.reducer;

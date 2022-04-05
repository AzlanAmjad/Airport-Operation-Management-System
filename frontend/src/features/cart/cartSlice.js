import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// actions
export const {} = cartSlice.actions;

// selector
export const selectCart = (state) => state.cartSlice.value;

// reducer
export default cartSlice.reducer;

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

// reducer
export default cartSlice.reducer;

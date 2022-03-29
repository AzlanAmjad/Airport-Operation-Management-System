import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

// user slice of state
export const userSlice = createSlice({
  name: "user",
  initialState,
  // define reducers with associated actions
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// actions
export const { login } = userSlice.actions;

// selector
export const selectUser = (state) => state.userSlice.value;

// reducer
export default userSlice.reducer;

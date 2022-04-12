import { createSlice } from "@reduxjs/toolkit";
const user = localStorage.getItem("access_token");

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

// user slice of state
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// actions
export const {} = userSlice.actions;

// reducer
export default userSlice.reducer;

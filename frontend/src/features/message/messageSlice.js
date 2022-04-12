import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

// actions
export const { setMessage, clearMessage } = messageSlice.actions;

// selector
export const selectMessage = (state) => state.messageSlice.value;

// reducer
export default messageSlice.reducer;

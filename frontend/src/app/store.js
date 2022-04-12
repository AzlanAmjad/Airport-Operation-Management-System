import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
import messageReducer from "../features/message/messageSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

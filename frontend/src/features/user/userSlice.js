import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";
import authService from "../../services/auth.service";

// register async thunk
export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, firstName, lastName, SSN, address }, thunkAPI) => {
    try {
      // register
      const response = await authService.register(
        email,
        password,
        firstName,
        lastName,
        SSN,
        address
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (err) {
      // handle error
      console.log(err);
      const message = err.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

// login async thunk
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      // login
      const response = await authService.login(email, password);
      return { user: response };
    } catch (err) {
      // handle error
      console.log(err);
      const message = err.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

// logout async thunk
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

// user slice of state
export const userSlice = createSlice({
  name: "user",
  initialState,
  // define reducers with associated actions
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = false
    }),
    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false
    }),
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    }),
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false
      state.user = null
    }),
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false
      state.user = null
    })
  },
});

// actions
export const {} = userSlice.actions;

// selector
export const selectUser = (state) => state.userSlice.value;

// reducer
export default userSlice.reducer;

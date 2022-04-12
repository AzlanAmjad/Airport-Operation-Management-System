import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";

// register async thunk
export const register = createAsyncThunk(
  "auth/register",
  async (email, password, firstName, lastName, SSN, address, thunkAPI) => {
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
      // return registered user
      return response.data;
    } catch (err) {
      // handle error
      console.log(err);
      return thunkAPI.rejectWithValue();
    }
  }
);

// login async thunk
export const login = createAsyncThunk(
  "auth/login",
  async (email, password, thunkAPI) => {
    try {
      // login
      const response = await authService.login(email, password);
      // return access and refresh token
      return response.data;
    } catch (err) {
      // handle error
      console.log(err);
      return thunkAPI.rejectWithValue();
    }
  }
);

// logout async thunk
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const initialState = {
  access: localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : null,
  isLoggedIn: localStorage.getItem("access_token") ? true : false,
};

// user slice of state
export const userSlice = createSlice({
  name: "user",
  initialState,
  // define reducers with associated actions
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.access = null;
      state.isLoggedIn = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.access = null;
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.access = action.payload.access;
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.access = null;
      state.isLoggedIn = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.access = null;
      state.isLoggedIn = false;
    });
  },
});

// actions
export const {} = userSlice.actions;

// reducer
export default userSlice.reducer;

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
      // access and refresh token get set to user
      return { user: response.data };
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
  value: { isLoggedIn: false, user: null },
};

// user slice of state
export const userSlice = createSlice({
  name: "user",
  initialState,
  // define reducers with associated actions
  extraReducers: (builder) => {
    
  },
});

// actions
export const {} = userSlice.actions;

// reducer
export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/Axios";

const access = localStorage.getItem("access_token");

const initialState = access
  ? {
      isLoggedIn: true,
      email: localStorage.getItem("email"),
      passenger: localStorage.getItem("passenger") === "true",
      airport_admin: localStorage.getItem("airport_admin") === "true",
      airline_admin: localStorage.getItem("airline_admin") === "true",
    }
  : {
      isLoggedIn: false,
      email: null,
      passenger: null,
      airport_admin: null,
      airline_admin: null,
    };

// async login action
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const result = await axiosInstance.post("token/", {
        email: email,
        password: password,
      });
      // set jwt in local storage
      localStorage.setItem("access_token", result.data.access);
      localStorage.setItem("refresh_token", result.data.refresh);
      axiosInstance.defaults.headers["Authorization"] =
        localStorage.getItem("access_token");

      console.log(result.data);

      // get the user
      const user = await axiosInstance.get("user/");
      localStorage.setItem("email", user.data.email);
      localStorage.setItem("passenger", user.data.a_passenger);
      localStorage.setItem("airport_admin", user.data.an_airport_admin);
      localStorage.setItem("airline_admin", user.data.an_airline_admin);

      return user.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue();
    }
  }
);

// async logout action
export const logout = createAsyncThunk("user/logout", async () => {
  const result = axiosInstance.post("logout/blacklist/", {
    refresh_token: localStorage.getItem("refresh_token"),
  });
  console.log(result.data)
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("email");
  localStorage.removeItem("passenger");
  localStorage.removeItem("airport_admin");
  localStorage.removeItem("airline_admin");
  axiosInstance.defaults.headers["Authorization"] = null;
});

// user slice of state
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email
      state.passenger = action.payload.a_passenger
      state.airport_admin = action.payload.an_airport_admin
      state.airline_admin = action.payload.an_airline_admin
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.email = null
      state.passenger = null
      state.airport_admin = null
      state.airline_admin = null
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.email = null
      state.passenger = null
      state.airport_admin = null
      state.airline_admin = null
    },
  },
});

// actions
export const {} = userSlice.actions;

// reducer
export default userSlice.reducer;

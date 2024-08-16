import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle",
  error: null,
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = "succeeded";
      state.error = null;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
      state.loggedIn = false;
      // localStorage.removeItem('users');
      localStorage.removeItem("userLogin");
      localStorage.removeItem("userData");
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setError } = userSlice.actions;

export default userSlice.reducer;

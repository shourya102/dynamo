import { createSlice } from "@reduxjs/toolkit";
import userService from "../../services/UserService";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: !!userService.getCurrentUser(),
    username: "",
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    username: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { login, logout, username } = userSlice.actions;
export const selectUserLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserUsername = (state) => state.user.username;
export default userSlice.reducer;

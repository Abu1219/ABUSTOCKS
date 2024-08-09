import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isAuthenticated: null || localStorage.getItem("isAuthenticated"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", true);
    },
    updateWatchList: (state, action) => {
      state.userInfo.watchList = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("isAuthenticated");
    },
  },
});
export const { setCredentials, updateWatchList, logout } = authSlice.actions;
export default authSlice.reducer;

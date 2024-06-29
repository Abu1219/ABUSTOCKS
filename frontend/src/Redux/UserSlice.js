import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userMail: "",
    watchList: [],
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.userMail = action.payload.userMail;
      state.watchList = action.payload.watchList || [];
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userName = "";
      state.userMail = "";
      state.watchList = [];
      state.isLoggedIn = false;
    },
    addToWatchlist: (state, action) => {
      const stock = action.payload;
      state.watchList.push(stock);
    },
    removefromWatchlist: (state, action) => {
      const name = action.payload.name;

      state.watchList = state.watchList.filter((el) => el.name !== name);
    },
  },
});

export const { login, logout, addToWatchlist, removefromWatchlist } =
  userSlice.actions;
export default userSlice.reducer;

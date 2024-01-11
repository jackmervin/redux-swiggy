import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: false,
  loginCon: false,
  loginData: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLogin: (state, actions) => {
      state.login = actions.payload;
    },
    getloginCon: (state, actions) => {
      state.loginCon = actions.payload;
    },
    getLoginData: (state, actions) => {
      state.loginData = actions.payload;
    },
  },
});

export default loginSlice.reducer;
export const { getLogin, getloginCon, getLoginData } = loginSlice.actions;

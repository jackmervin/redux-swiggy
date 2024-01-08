import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: false,
  loginCon: false,
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
  },
});

export default loginSlice.reducer;
export const { getLogin, getloginCon } = loginSlice.actions;

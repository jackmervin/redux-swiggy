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
    changeDate: (state, actions) => {
      state.loginData[0].name = actions.payload.name;
      state.loginData[0].phoneNo = actions.payload.phoneNo;
      state.loginData[0].email = actions.payload.email;
    },
  },
});

export default loginSlice.reducer;
export const { getLogin, getloginCon, getLoginData, changeDate } =
  loginSlice.actions;

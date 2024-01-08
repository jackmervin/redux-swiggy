import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLogin: (state, actions) => {
      state.login = actions.payload;
    },
  },
});

export default loginSlice.reducer;
export const { getLogin } = loginSlice.actions;

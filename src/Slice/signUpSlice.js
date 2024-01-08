import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  signUp: false,
  users: [],
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    getSignUp: (state, actions) => {
      state.signUp = actions.payload;
    },
    addUsers: (state, actions) => {
      state.users.push(actions.payload);
    },
  },
});

export default signUpSlice.reducer;
export const { getSignUp, addUsers } = signUpSlice.actions;

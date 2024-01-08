import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  signUp: false,
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    getSignUp: (state, actions) => {
      state.signUp = actions.payload;
    },
  },
});

export default signUpSlice.reducer;
export const { getSignUp } = signUpSlice.actions;

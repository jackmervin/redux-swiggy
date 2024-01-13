import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: true,
};

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    homepagecon: (state) => {
      state.profile = false;
    },
  },
});

export default homePageSlice.reducer;
export const { homepagecon } = homePageSlice.actions;

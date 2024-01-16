import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: true,
  hoteldates: [],
  hotelcon: false,
};

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    homepagecon: (state) => {
      state.profile = false;
    },
    hotelDataGet: (state, actions) => {
      state.hoteldates.push(actions.payload);
    },
    hoteldatescon: (state, actions) => {
      state.hotelcon = actions.payload;
    },
    hodeldatesDelete: (state) => {
      state.hoteldates.pop();
    },
  },
});

export default homePageSlice.reducer;
export const { hodeldatesDelete, hoteldatescon, homepagecon, hotelDataGet } =
  homePageSlice.actions;

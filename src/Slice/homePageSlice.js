import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: true,
  hoteldates: [],
  hotelcon: false,
  addbtn: "",
  hotelid: "",
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
    hotelAdd: (state, actions) => {
      state.addbtn = actions.payload;
    },
    hotelUpdate: (state, actions) => {
      var id = actions.payload.foodId;
      // console.log(actions.payload);
      console.log(actions.payload.foodId);
      state.hoteldates[0].menu[id] = actions.payload;
    },
    hotelGetid: (state, actions) => {
      console.log(actions.payload);
      state.hotelid = actions.payload;
    },
  },
});

export default homePageSlice.reducer;
export const {
  hodeldatesDelete,
  hoteldatescon,
  homepagecon,
  hotelDataGet,
  hotelAdd,
  hotelAddcon,
  hotelUpdate,
  hotelGetid,
} = homePageSlice.actions;

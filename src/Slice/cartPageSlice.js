import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartqun: 0,
  cartCon: false,
  cartData: [],
  cartAddal: 1,
  addNewadd: false,
};
const cartPageSlice = createSlice({
  name: "cartPage",
  initialState,
  reducers: {
    getCartqun: (state, actions) => {
      state.cartqun = actions.payload;
    },
    addcartval: (state) => {
      state.cartqun = state.cartqun + state.cartAddal;
    },
    mincartval: (state) => {
      state.cartqun = state.cartqun - state.cartAddal;
    },
    cartvaluecon: (state, actions) => {
      state.cartCon = actions.payload;
    },
    cartaddNewAdd: (state, actions) => {
      state.addNewadd = actions.payload;
    },
  },
});

export default cartPageSlice.reducer;
export const {
  cartaddNewAdd,
  cartvaluecon,
  getCartqun,
  addcartval,
  mincartval,
} = cartPageSlice.actions;

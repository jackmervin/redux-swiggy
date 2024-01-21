import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartqun: 0,
  cartCon: false,
  cartData: [],
  cartAddal: 1,
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
  },
});

export default cartPageSlice.reducer;
export const { cartvaluecon, getCartqun, addcartval, mincartval } =
  cartPageSlice.actions;

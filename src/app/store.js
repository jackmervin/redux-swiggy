import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "../Slice/signUpSlice";
import loginReducer from "../Slice/loginSlice";
import hompageReducer from "../Slice/homePageSlice";
import cartReducer from "../Slice/cartPageSlice";
export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    login: loginReducer,
    homepage: hompageReducer,
    cartPage: cartReducer,
  },
});

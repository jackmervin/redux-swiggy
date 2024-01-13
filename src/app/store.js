import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "../Slice/signUpSlice";
import loginReducer from "../Slice/loginSlice";
import hompageReducer from "../Slice/homePageSlice";
export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    login: loginReducer,
    homepage: hompageReducer,
  },
});

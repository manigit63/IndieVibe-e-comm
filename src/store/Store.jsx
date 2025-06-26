import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/ProductSlice";
import userSlice from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    userReducer: userSlice,
  },
});

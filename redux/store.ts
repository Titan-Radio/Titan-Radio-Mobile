import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import blogReducer from "./blogSlice";

export default configureStore({
  reducer: {
    nav: navReducer,
    blog: blogReducer,
  },
});

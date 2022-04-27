import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogRoutes: "",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setBlogRoute: (state, action) => {
      state.blogRoutes = action.payload;
    },
  },
});

export const { setBlogRoute } = navSlice.actions;

export default navSlice.reducer;

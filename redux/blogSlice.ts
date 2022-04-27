import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    incPage: (state) => {
      state.page++;
    },
    resetPage: (state) => {
      state.page = 1;
    }
  },
});

export const { incPage, resetPage } = blogSlice.actions;

export default blogSlice.reducer;

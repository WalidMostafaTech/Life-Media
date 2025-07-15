import { createSlice } from "@reduxjs/toolkit";
import { getPageDetails, getPages } from "./pagesAction";

const initialState = {
  pages: [],
  page: {},
  loading: false,
  error: null,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get pages
      .addCase(getPages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPages.fulfilled, (state, action) => {
        state.loading = false;
        state.pages = action.payload;
      })
      .addCase(getPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get page details
      .addCase(getPageDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPageDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload;
      })
      .addCase(getPageDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = pagesSlice.actions;

export default pagesSlice.reducer;

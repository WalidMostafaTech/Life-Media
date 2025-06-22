import { createSlice } from "@reduxjs/toolkit";
import { getSuccessStories } from "./success_storiesAction";

const initialState = {
  successStories: [],
  loading: false,
  error: null,
};

const successStoriesSlice = createSlice({
  name: "successStories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuccessStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSuccessStories.fulfilled, (state, action) => {
        state.loading = false;
        state.successStories = action.payload;
      })
      .addCase(getSuccessStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = successStoriesSlice.actions;

export default successStoriesSlice.reducer;

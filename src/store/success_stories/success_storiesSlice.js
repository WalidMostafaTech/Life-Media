import { createSlice } from "@reduxjs/toolkit";
import {
  getSuccessStories,
  getSuccessStoryDetails,
} from "./success_storiesAction";

const initialState = {
  successStories: [],
  successStoriesDetails: {},
  loading: false,
  error: null,
};

const successStoriesSlice = createSlice({
  name: "successStories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getSuccessStories
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
      })
      // getSuccessStoriesDetails
      .addCase(getSuccessStoryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSuccessStoryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.successStoriesDetails = action.payload;
      })
      .addCase(getSuccessStoryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = successStoriesSlice.actions;

export default successStoriesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getVideoSection } from "./videoSectionAction";

const initialState = {
  videoSection: [],
  loading: false,
  error: null,
};

const videoSectionSlice = createSlice({
  name: "videoSection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideoSection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideoSection.fulfilled, (state, action) => {
        state.loading = false;
        state.videoSection = action.payload;
      })
      .addCase(getVideoSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = videoSectionSlice.actions;

export default videoSectionSlice.reducer;

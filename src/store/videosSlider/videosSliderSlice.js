import { createSlice } from "@reduxjs/toolkit";
import { getVideosSlider } from "./videosSliderAction";

const initialState = {
  videosSlider: [],
  loading: false,
  error: null,
};

const videosSliderSlice = createSlice({
  name: "videosSlider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideosSlider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideosSlider.fulfilled, (state, action) => {
        state.loading = false;
        state.videosSlider = action.payload;
      })
      .addCase(getVideosSlider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = videosSliderSlice.actions;

export default videosSliderSlice.reducer;

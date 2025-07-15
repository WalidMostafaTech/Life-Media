import { createSlice } from "@reduxjs/toolkit";
import { getImagesSlider } from "./imagesSliderAction";

const initialState = {
  imagesSlider: [],
  loading: false,
  error: null,
};

const imagesSliderSlice = createSlice({
  name: "imagesSlider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImagesSlider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getImagesSlider.fulfilled, (state, action) => {
        state.loading = false;
        state.imagesSlider = action.payload;
      })
      .addCase(getImagesSlider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = imagesSliderSlice.actions;

export default imagesSliderSlice.reducer;

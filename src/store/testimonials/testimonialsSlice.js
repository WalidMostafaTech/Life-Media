import { createSlice } from "@reduxjs/toolkit";
import { getTestimonials } from "./testimonialsAction";

const initialState = {
  testimonials: [],
  loading: false,
  error: null,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(getTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;

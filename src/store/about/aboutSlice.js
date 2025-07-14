import { createSlice } from "@reduxjs/toolkit";
import { getAbout } from "./aboutAction";

const initialState = {
  about: [],
  loading: false,
  error: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAbout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAbout.fulfilled, (state, action) => {
        state.loading = false;
        state.about = action.payload;
      })
      .addCase(getAbout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = aboutSlice.actions;

export default aboutSlice.reducer;

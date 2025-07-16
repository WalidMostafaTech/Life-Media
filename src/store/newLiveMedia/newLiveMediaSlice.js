import { createSlice } from "@reduxjs/toolkit";
import { getNewLiveMedia } from "./newLiveMediaAction";

const initialState = {
  newLiveMedia: [],
  loading: false,
  error: null,
};

const newLiveMediaSlice = createSlice({
  name: "newLiveMedia",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewLiveMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewLiveMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.newLiveMedia = action.payload;
      })
      .addCase(getNewLiveMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = newLiveMediaSlice.actions;

export default newLiveMediaSlice.reducer;

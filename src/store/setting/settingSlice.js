import { createSlice } from "@reduxjs/toolkit";
import { getSetting } from "./settingAction";

const initialState = {
  setting: [],
  loading: false,
  error: null,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSetting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSetting.fulfilled, (state, action) => {
        state.loading = false;
        state.setting = action.payload;
      })
      .addCase(getSetting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = settingSlice.actions;

export default settingSlice.reducer;

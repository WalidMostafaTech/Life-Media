import { createSlice } from "@reduxjs/toolkit";
import { fetchGovernorates, fetchOffices, fetchPages, fetchSetting } from "./settingAction";

const initialState = {
  setting: [],
  governorates: [],
  offices: [],
  pages: [],
  loading: false,
  error: null,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSetting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSetting.fulfilled, (state, action) => {
        state.loading = false;
        state.setting = action.payload;
      })
      .addCase(fetchSetting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchGovernorates.fulfilled, (state, action) => {
        state.loading = false;
        state.governorates = action.payload;
      })

      .addCase(fetchOffices.fulfilled, (state, action) => {
        state.loading = false;
        state.offices = action.payload;
      })

      .addCase(fetchPages.fulfilled, (state, action) => {
        state.loading = false;
        state.pages = action.payload;
      });
  },
});

export const { _ } = settingSlice.actions;

export default settingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getGovernorates } from "./governoratesAction";

const initialState = {
  governorates: [],
  loading: false,
  error: null,
};

const governoratesSlice = createSlice({
  name: "governorates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGovernorates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGovernorates.fulfilled, (state, action) => {
        state.loading = false;
        state.governorates = action.payload;
      })
      .addCase(getGovernorates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = governoratesSlice.actions;

export default governoratesSlice.reducer;

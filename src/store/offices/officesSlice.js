import { createSlice } from "@reduxjs/toolkit";
import { getOffices } from "./officesAction";

const initialState = {
  offices: [],
  loading: false,
  error: null,
};

const officesSlice = createSlice({
  name: "offices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOffices.fulfilled, (state, action) => {
        state.loading = false;
        state.offices = action.payload;
      })
      .addCase(getOffices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = officesSlice.actions;

export default officesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getSolutions } from "./solutionsAction";

const initialState = {
  solutions: [],
  loading: false,
  error: null,
};

const solutionsSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSolutions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSolutions.fulfilled, (state, action) => {
        state.loading = false;
        state.solutions = action.payload;
      })
      .addCase(getSolutions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = solutionsSlice.actions;

export default solutionsSlice.reducer;

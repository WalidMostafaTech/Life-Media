import { createSlice } from "@reduxjs/toolkit";
import { getSolutions, getSolutionsDetails } from "./solutionsAction";

const initialState = {
  solutions: [],
  solution: {},
  loading: false,
  error: null,
};

const solutionsSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get solutions
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
      })
      // get solution details
      .addCase(getSolutionsDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSolutionsDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.solution = action.payload;
      })
      .addCase(getSolutionsDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = solutionsSlice.actions;

export default solutionsSlice.reducer;

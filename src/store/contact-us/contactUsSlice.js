import { createSlice } from "@reduxjs/toolkit";
import { contactUsAct } from "./contactUsAction";

const initialState = {
  loading: false,
  error: null,
};

const contactUSSlice = createSlice({
  name: "contactUS",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUsAct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(contactUsAct.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(contactUsAct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = contactUSSlice.actions;

export default contactUSSlice.reducer;

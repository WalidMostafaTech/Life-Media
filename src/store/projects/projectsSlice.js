import { createSlice } from "@reduxjs/toolkit";
import { getProjectDetails, getProjects } from "./projectsAction";

const initialState = {
  projects: [],
  project: {},
  loading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get projects
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get project details
      .addCase(getProjectDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(getProjectDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { _ } = projectsSlice.actions;

export default projectsSlice.reducer;

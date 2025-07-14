import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (inHome = false, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const url = inHome ? "/projects?in_home=1" : "/projects";

      const { data } = await axios.get(url, {
        headers: {
          lang: language,
        },
      });

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProjectDetails = createAsyncThunk(
  "projects/getProjectDetails",
  async (id, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get(`/projectDetails?project_id=${id}`, {
        headers: {
          lang: language,
        },
      });

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

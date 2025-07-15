import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPages = createAsyncThunk(
  "pages/getPages",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/pages", {
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

export const getPageDetails = createAsyncThunk(
  "pages/getPageDetails",
  async (slug, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get(`/pages/${slug}`, {
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

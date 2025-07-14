import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAbout = createAsyncThunk(
  "about/getAbout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/about_us", {
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

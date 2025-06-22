import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSuccessStories = createAsyncThunk(
  "success_stories/getSuccessStories",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/success_stories", {
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

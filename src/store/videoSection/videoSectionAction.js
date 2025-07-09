import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getVideoSection = createAsyncThunk(
  "videoSection/getVideoSection",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/videos?is_pin=1", {
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

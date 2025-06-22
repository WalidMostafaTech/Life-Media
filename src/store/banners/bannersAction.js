import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBanners = createAsyncThunk(
  "banners/getBanners",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/banners", {
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

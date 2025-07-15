import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getImagesSlider = createAsyncThunk(
  "imagesSlider/getImagesSlider",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/gallery", {
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

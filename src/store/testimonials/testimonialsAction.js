import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTestimonials = createAsyncThunk(
  "testimonials/getTestimonials",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/testimonials", {
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

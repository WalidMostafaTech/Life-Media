import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGovernorates = createAsyncThunk(
  "governorates/getGovernorates",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/governorates", {
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

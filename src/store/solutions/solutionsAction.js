import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSolutions = createAsyncThunk(
  "solutions/getSolutions",
  async (inHome = false, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const url = inHome ? "/solutions?in_home=1" : "/solutions";

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewLiveMedia = createAsyncThunk(
  "newLiveMedia/getNewLiveMedia",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get("/media", {
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

export const getNewLiveMediaDetails = createAsyncThunk(
  "newLiveMedia/getNewLiveMediaDetails",
  async (id, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const language = state.language.lang || "en";

      const { data } = await axios.get(`/mediaDetails?media_id=${id}`, {
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

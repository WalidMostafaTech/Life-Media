import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSettings,
  getGovernorates,
  getOffices,
} from "../../api/mainServices";
import { getPages, getPagesDetails } from "../../api/pagesServices";

export const fetchSetting = createAsyncThunk(
  "setting/fetchSetting",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getSettings();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.error_msg || "Failed to load config",
      );
    }
  },
);

export const fetchGovernorates = createAsyncThunk(
  "setting/fetchGovernorates",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getGovernorates();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.error_msg || "Failed to load config",
      );
    }
  },
);

export const fetchOffices = createAsyncThunk(
  "setting/fetchOffices",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getOffices();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.error_msg || "Failed to load config",
      );
    }
  },
);

export const fetchPages = createAsyncThunk(
  "setting/fetchPages",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPages();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.error_msg || "Failed to load config",
      );
    }
  },
);

export const fetchPagesDetails = createAsyncThunk(
  "setting/fetchPagesDetails",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPagesDetails();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.error_msg || "Failed to load config",
      );
    }
  },
);

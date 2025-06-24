import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactUsAct = createAsyncThunk(
  "contactUS/contactUsAct",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contactUs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

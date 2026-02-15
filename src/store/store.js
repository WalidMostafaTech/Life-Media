import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice/languageSlice";
import settingSlice from "./setting/settingSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    setting: settingSlice,
  },
});

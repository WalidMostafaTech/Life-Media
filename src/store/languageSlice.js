import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("LifeMediaLang") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === "en" ? "ar" : "en";
      localStorage.setItem("LifeMediaLang", state.lang);
      document.body.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("LifeMediaLang", state.lang);
      document.body.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

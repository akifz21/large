import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "tr",
  theme: localStorage.getItem("theme") || "system",
};

const site = createSlice({
  name: "site",
  initialState,
  reducers: {
    _setLanguage: (state, action) => {
      state.language = action.payload;
    },
    _setTheme: (state, action) => {
      state.theme = action.payload;

      if (state.theme === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", action.payload);
      }
    },
  },
});

export const { _setLanguage, _setTheme } = site.actions;
export default site.reducer;

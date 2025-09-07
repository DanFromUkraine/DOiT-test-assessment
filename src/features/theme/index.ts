"use client";

import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "@/src/features/types";

const initialState: ThemeState = {
      theme: "light",
};

export const themeSlice = createSlice({
      name: "theme",
      initialState,
      reducers: {
            toggleTheme(state) {
                  state.theme = state.theme === "light" ? "dark" : "light";
                  const classList = document.documentElement.classList;
                  if (state.theme === "light") classList.remove("dark");
                  else classList.add("dark");
            },
            setDark(state) {
                  state.theme = "dark";
            },
      },
});

export default themeSlice.reducer;

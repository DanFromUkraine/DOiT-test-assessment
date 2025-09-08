"use client";

import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "@/src/features/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

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

const { toggleTheme, setDark } = themeSlice.actions;

export const useSelectTheme = () =>
      useSelector<RootState, ThemeState>((state) => state.theme as ThemeState);

export function useToggleTheme() {
      const dispatch = useDispatch();
      return () => dispatch(toggleTheme());
}

export default themeSlice.reducer;

"use client";

import { useCallback, useEffect } from "react";
import { useSetDarkTheme, useToggleTheme } from "@/src/features/theme/utils";

function getThemeLS() {
      return localStorage.getItem("colorTheme") || "light";
}

export function useInitThemeFromLS() {
      const setDark = useSetDarkTheme();

      useEffect(() => {
            const theme = getThemeLS();
            const classList = document.documentElement.classList;
            if (theme === "dark") {
                  classList.add("dark");
                  setDark();
            } else {
                  classList.remove("dark");
            }
      }, []);
}

function addThemeClassToDocument() {

}

function toggleThemeLS() {
      const theme = getThemeLS();
      if (theme === "light") {
            localStorage.setItem("colorTheme", "dark");
            document.documentElement.classList.add("dark");
      } else {
            localStorage.setItem("colorTheme", "light");
            document.documentElement.classList.remove("dark");

      }
}

export function useToggleThemeAndSyncWithLS() {
      const toggleTheme = useToggleTheme();

      return useCallback(() => {
            toggleThemeLS();
            toggleTheme();
      }, []);
}

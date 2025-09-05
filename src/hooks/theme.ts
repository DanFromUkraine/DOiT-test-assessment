"use client"

import {useCallback, useEffect} from "react";
import {useSetDarkTheme, useToggleTheme} from "@/src/features/theme/utils";

function getThemeLS() {
    return localStorage.getItem("colorTheme") || "light";
}

export function useInitThemeFromLS() {
    const setDark = useSetDarkTheme();


    useEffect(() => {
        const theme = getThemeLS();
        const classList = document.documentElement.classList;
        if (theme === "dark") {
            classList.add("dark")
            setDark();
        } else {
            classList.remove("dark")
        }
    }, [])
}

function toggleThemeLS() {
    const theme = getThemeLS()
    if (theme === "light") {
        localStorage.setItem("colorTheme", "dark");
    } else {
        localStorage.setItem("colorTheme", "light");
    }
}

export function useToggleThemeAndSyncWithLS() {
    const toggleTheme = useToggleTheme();

    return useCallback(() => {
        toggleThemeLS();
        toggleTheme();
    }, [])
}
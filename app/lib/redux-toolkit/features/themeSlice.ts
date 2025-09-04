"use client"

import {createSlice} from "@reduxjs/toolkit";
import {ThemeState} from "@/app/lib/redux-toolkit/features/types";


const initialState: ThemeState = "light";

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state: ThemeState) {
            return state === "light" ? "dark" : "light";
        }
    }
})

export default themeSlice.reducer;
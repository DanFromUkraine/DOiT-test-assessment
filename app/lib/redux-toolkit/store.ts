"use client"

import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./features/theme"
import sidebarReducer from "@/app/lib/redux-toolkit/features/sidebar";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        sidebar: sidebarReducer
    }
});


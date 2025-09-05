"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/src/features/theme";
import sidebarReducer from "@/src/features/sidebar";

export const store = configureStore({
      reducer: {
            theme: themeReducer,
            sidebar: sidebarReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

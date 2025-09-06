"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/src/features/theme";
import sidebarReducer from "@/src/features/sidebar";
import { postsAPI } from "@/src/services/postsApi";
import commentsModalReducer from "@/src/features/commentsModal";

export const store = configureStore({
      reducer: {
            theme: themeReducer,
            sidebar: sidebarReducer,
            commentsModal: commentsModalReducer,
            [postsAPI.reducerPath]: postsAPI.reducer,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

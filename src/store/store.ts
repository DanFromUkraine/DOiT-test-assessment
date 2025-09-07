"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/src/features/themeSlice";
import drawerVisibilityReducer from "@/src/features/drawerVisibilitySlice";
import { postsAPI } from "@/src/services/postsApi";
import commentsVisibilityReducer from "@/src/features/commentsVisibilitySlice";
import snackbarVisibilityReducer from "@/src/features/snackbarVisibilitySlice";
import createPostPreviewVisibilityReducer from "@/src/features/createPostPreviewVisibilitySlice";
import postsReducer from "@/src/features/postsSlice";

export const store = configureStore({
      reducer: {
            theme: themeReducer,
            drawerVisibility: drawerVisibilityReducer,
            commentsVisibility: commentsVisibilityReducer,
            snackbarVisibility: snackbarVisibilityReducer,
            createPostPreviewVisibility: createPostPreviewVisibilityReducer,
            posts: postsReducer,
            [postsAPI.reducerPath]: postsAPI.reducer,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

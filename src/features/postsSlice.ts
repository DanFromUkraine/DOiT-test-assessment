"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Post } from "@/src/services/postsApi/types";

export interface Posts {
      posts: Post[];
}

const initialState: Posts = {
      posts: [],
};

export const postsSlice = createSlice({
      name: "posts",
      initialState,
      reducers: {
            initiatePosts(state, action: { payload: Post[] }) {
                  state.posts = action.payload;
            },
            addPost(state, action: { payload: Post }) {
                  state.posts.unshift(action.payload);
            },
            deletePost(state, action: { payload: number }) {
                  state.posts = state.posts.filter(
                        (post) => post.id !== action.payload,
                  );
            },
      },
});

export const { initiatePosts, addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;

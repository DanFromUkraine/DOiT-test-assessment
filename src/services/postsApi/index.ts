import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment, Post } from "./types";

export const postsAPI = createApi({
      reducerPath: "postsApi",
      baseQuery: fetchBaseQuery({
            baseUrl: "https://jsonplaceholder.typicode.com/",
      }),
      endpoints: (builder) => ({
            getAllPosts: builder.query<Post[], void>({
                  query: () => "posts",
            }),
            getSpecificPost: builder.query<Post, number>({
                  query: (postId) => `posts/${postId}`,
            }),
            getCommentsForPost: builder.query<Comment[], number>({
                  query: (postId) => `posts/${postId}/comments`,
            }),
            createPost: builder.mutation<void, Post>({
                  query: (newPost) => ({
                        url: "/posts",
                        method: "POST",
                        body: newPost,
                  }),
            }),
            deletePost: builder.mutation<void, number>({
                  query: (postId) => ({
                        url: `posts/${postId}`,
                        method: "DELETE",
                  }),
            }),
      }),
});

export const {
      useGetAllPostsQuery,
      useGetSpecificPostQuery,
      useGetCommentsForPostQuery,
      useCreatePostMutation,
      useDeletePostMutation,
} = postsAPI;

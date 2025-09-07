"use client";

import {
      useCreatePostMutation,
      useDeletePostMutation,
      useGetAllPostsQuery,
} from "@/src/services/postsApi";
import {
      addPost,
      deletePost,
      initiatePosts,
      Posts,
} from "@/src/features/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@/src/services/postsApi/types";
import { RootState } from "@/src/store/store";
import { useEffect } from "react";

export function useSelectPosts() {
      return useSelector<RootState, Posts>((state) => state.posts);
}

export function useInitiateAllPosts() {
      const { data, isSuccess, isError, error } = useGetAllPostsQuery();
      const dispatch = useDispatch();
      const { posts } = useSelectPosts();

      useEffect(() => {
            if (isSuccess && posts.length === 0) {
                  dispatch(initiatePosts(data));
            }
      }, [isSuccess]);

      if (isError) {
            throw error;
      }
}

export function useCreatePost() {
      const [createPostQuery] = useCreatePostMutation();
      const dispatch = useDispatch();

      return async (newPost: Post) => {
            await createPostQuery(newPost).then(() => {
                  dispatch(addPost(newPost));
            });
      };
}

export function useDeletePost(id: number) {
      const [deletePostQuery] = useDeletePostMutation();
      const dispatch = useDispatch();

      return () => {
            deletePostQuery(id).then(() => {
                  dispatch(deletePost(id));
            });
      };
}

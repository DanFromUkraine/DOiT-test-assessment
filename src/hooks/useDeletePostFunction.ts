"use click";

import { useDeletePostMutation } from "@/src/services/postsApi";

export function useDeletePostFunction(postId: number) {
      const [deletePost] = useDeletePostMutation();
      return () => {
            deletePost(postId);
      };
}

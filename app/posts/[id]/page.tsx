"use client";

import Box from "@mui/material/Box";
import { useGetSpecificPostQuery } from "@/src/services/postsApi";
import PostCard from "@/src/components/Post";
import { Post } from "@/src/services/postsApi/types";
import { useGetPostId } from "@/src/hooks/useGetId";
import CommentsModal from "@/src/components/CommentsModal";

export default function SpecificPost() {
      const id = useGetPostId();

      const { data, isLoading, isError, error } = useGetSpecificPostQuery(id);

      if (isError) throw error;

      return (
            <Box component="main" className="flex justify-center pt-12">
                  <CommentsModal postId={id} />
                  {isLoading ? (
                        <p>hello</p>
                  ) : (
                        <PostCard {...(data as Post)} variant="post-details" />
                  )}
            </Box>
      );
}

"use client";

import List from "@mui/material/List";
import PostCard from "../Post";
import { Post } from "@/src/services/postsApi/types";
import { Skeleton } from "@mui/material";
import { useDeferredValue } from "react";

export default function FilteredPosts({
      posts,
      searchQuery,
}: {
      posts: Post[];
      searchQuery: string;
}) {
      const deferredSearchQuery = useDeferredValue(searchQuery);
      const filteredPosts =
            posts?.filter((post) => post.title.includes(deferredSearchQuery)) ||
            [];
      const dullArray = new Array(100).fill(0);

      const list =
            posts.length === 0
                  ? dullArray.map((_, i) => (
                          <Skeleton
                                key={i}
                                animation="wave"
                                variant="rectangular"
                                className="mb-4 rounded-md test-postSkeleton"
                                height={250}
                          />
                    ))
                  : filteredPosts.map((post) => (
                          <PostCard
                                variant="post-preview"
                                key={post.id}
                                {...post}
                          />
                    ));

      return <List className="postCardsContainer">{list}</List>;
}

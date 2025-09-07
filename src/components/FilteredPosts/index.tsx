"use client";

import List from "@mui/material/List";
import PostCard from "../Post";
import { Post } from "@/src/services/postsApi/types";
import { Skeleton } from "@mui/material";

export default function FilteredPosts({
      posts,
      searchQuery,
      isLoading,
}: {
      posts: Post[] | undefined;
      searchQuery: string;
      isLoading: boolean;
}) {
      // const deferredSearchQuery = useDeferredValue(searchQuery);
      const filteredPosts =
            posts?.filter((post) => post.title.includes(searchQuery)) || [];
      const dullArray = new Array(30).fill(0);

      const list = isLoading
            ? dullArray.map((_, i) => (
                    <Skeleton
                          key={i}
                          animation="wave"
                          variant="rectangular"
                          className="mb-4 rounded-md"
                          height={250}
                    />
              ))
            : filteredPosts.map((post) => (
                    <PostCard variant="post-preview" key={post.id} {...post} />
              ));

      return <List className="postCardsContainer">{list}</List>;
}

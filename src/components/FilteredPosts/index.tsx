"use client";

import List from "@mui/material/List";
import { useDeferredValue } from "react";
import PostCard from "./Post";
import { Post } from "@/src/services/postsApi/types";

export default function FilteredPosts({
      posts,
      searchQuery,
}: {
      posts: Post[];
      searchQuery: string;
}) {
      const deferredSearchQuery = useDeferredValue(searchQuery);
      const filteredPosts = posts.filter((post) =>
            post.title.includes(deferredSearchQuery),
      );

      return (
            <List className="postCardsContainer">
                  {filteredPosts.map((post, i) => (
                        <PostCard key={post.id} {...post} />
                  ))}
            </List>
      );
}

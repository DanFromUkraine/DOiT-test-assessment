"use client";

import SearchBar from "@/src/components/SearchBar";
import Box from "@mui/material/Box";
import { useState } from "react";
import FilteredPosts from "@/src/components/FilteredPosts";
import CreatePostSpeedDial from "@/src/components/CreatePostSpeedDial";
import { useInitiateAllPosts, useSelectPosts } from "@/src/hooks/usePostHooks";

export default function AllPostsPage() {
      const [query, setQuery] = useState(() => "");
      useInitiateAllPosts();
      const { posts } = useSelectPosts();

      return (
            <Box className="flex justify-center py-5" component="main">
                  <Box className="w-10/12 flex flex-col gap-3">
                        <SearchBar setQuery={setQuery} />
                        <FilteredPosts posts={posts} searchQuery={query} />
                  </Box>
                  <CreatePostSpeedDial />
            </Box>
      );
}

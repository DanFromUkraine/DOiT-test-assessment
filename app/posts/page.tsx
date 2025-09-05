"use client";

import SearchBar from "@/src/components/SearchBar";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useGetAllPostsQuery } from "@/src/services/postsApi";
import FilteredPosts from "@/src/components/FilteredPosts";

export default function AllPostsPage() {
      const [query, setQuery] = useState("");
      const { data, isLoading, error, isError } = useGetAllPostsQuery();

      return (
            <Box className="flex justify-center py-5" component="main">
                  <Box className="w-10/12 flex flex-col gap-3">
                        <SearchBar setQuery={setQuery} />
                        <FilteredPosts posts={data || []} searchQuery={query} />
                  </Box>
            </Box>
      );
}

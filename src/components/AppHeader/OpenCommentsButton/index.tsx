"use client";

import IconButton from "@mui/material/IconButton";
import { Comment } from "@mui/icons-material";
import { useGetPostId } from "@/src/hooks/useGetId";
import { clsx } from "clsx";
import { Badge } from "@mui/material";
import { useGetCommentsForPostQuery } from "@/src/services/postsApi";
import { useOpenComments } from "@/src/features/commentsVisibilitySlice";

export default function OpenCommentsButton() {
      const id = useGetPostId();
      const openDialog = useOpenComments();
      const { data } = useGetCommentsForPostQuery(id);

      return (
            <IconButton onClick={openDialog} className={clsx({ hidden: !id })}>
                  <Badge badgeContent={data && data.length} color="warning">
                        <Comment className="text-white" />
                  </Badge>
            </IconButton>
      );
}

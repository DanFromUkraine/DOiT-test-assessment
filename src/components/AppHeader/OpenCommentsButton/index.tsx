"use client";

import IconButton from "@mui/material/IconButton";
import { Comment } from "@mui/icons-material";
import { useGetPostId } from "@/src/hooks/useGetId";
import { useGetOpenCommentsModalFn } from "@/src/features/commentsModal/utils";
import { clsx } from "clsx";
import { Badge } from "@mui/material";
import { useGetCommentsForPostQuery } from "@/src/services/postsApi";

export default function OpenCommentsButton() {
      const id = useGetPostId();
      const openModal = useGetOpenCommentsModalFn();
      const { data } = useGetCommentsForPostQuery(id);
      const onClick = () => {
            openModal();
      };

      return (
            <IconButton onClick={onClick} className={clsx({ hidden: !id })}>
                  <Badge badgeContent={data && data.length} color="warning">
                        <Comment className="text-white" />
                  </Badge>
            </IconButton>
      );
}

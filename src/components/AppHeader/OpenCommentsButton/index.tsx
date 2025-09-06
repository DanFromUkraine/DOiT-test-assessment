"use client";

import IconButton from "@mui/material/IconButton";
import { Comment } from "@mui/icons-material";
import { useGetPostId } from "@/src/hooks/useGetId";
import { useGetOpenCommentsModalFn } from "@/src/features/commentsModal/utils";
import { clsx } from "clsx";

export default function OpenCommentsButton() {
      const id = useGetPostId();
      const openModal = useGetOpenCommentsModalFn();
      const onClick = () => {
            openModal();
      };

      return (
            <IconButton onClick={onClick} className={clsx({ hidden: !id })}>
                  <Comment className="text-white" />
            </IconButton>
      );
}

"use client";

import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useDeletePostFunction } from "@/src/hooks/useDeletePostFunction";

export default function PostDescriptionFragment({
      body,
      postId,
}: {
      body: string;
      postId: number;
}) {
      const onDeleteButtonClick = useDeletePostFunction(postId);

      return (
            <Box className="flex flex-col gap-2">
                  <Typography>{body}</Typography>
                  <Box className="flex gap-2">
                        <Button
                              color="error"
                              variant="contained"
                              startIcon={<DeleteIcon className="text-white" />}
                              onClick={onDeleteButtonClick}
                        >
                              ВИДАЛИТИ
                        </Button>

                        <Link href="/posts">
                              <Button
                                    variant="outlined"
                                    startIcon={<ArrowBackIcon />}
                              >
                                    ДО СПИСКУ
                              </Button>
                        </Link>
                  </Box>
            </Box>
      );
}

import { type Post } from "@/src/services/postsApi/types";
import Box from "@mui/material/Box";
import { Avatar, ListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function PostCard({ title, body, userId, id }: Post) {
      return (
            <ListItem className="postCard">
                  <Box className="flex items-center w-full">
                        <Avatar className="mr-2">{title[0]}</Avatar>
                        <Box className="flex flex-col">
                              <Typography>{title}</Typography>
                              <Typography
                                    variant="subtitle2"
                                    className="text-gray-500"
                              >{`User ${userId}`}</Typography>
                        </Box>
                        <IconButton className="ml-auto mb-auto">
                              <DeleteIcon className="text-red-500" />
                        </IconButton>
                  </Box>

                  <Typography>{`${body.slice(0, 50)}${body.length > 79 ? "..." : ""}`}</Typography>

                  <Link href={`/posts/${id}`}>
                        <IconButton className="justify-start">
                              <ArrowForwardIcon className="dark:text-white" />
                        </IconButton>
                  </Link>
            </ListItem>
      );
}

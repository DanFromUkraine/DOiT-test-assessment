import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import { PostCardVariants } from "@/src/components/Post";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeletePostFunction } from "@/src/hooks/useDeletePostFunction";

export default function PostHeader({
      title,
      userId,
      variant,
      postId,
}: {
      title: string;
      userId: number;
      variant: PostCardVariants;
      postId: number;
}) {
      const handleClick = useDeletePostFunction(postId);

      return (
            <Box className="flex items-center w-full">
                  <Avatar className="mr-2">{title[0]}</Avatar>
                  <Box className="flex flex-col">
                        <Typography>{title}</Typography>
                        <Typography
                              variant="subtitle2"
                              className="text-gray-500"
                        >{`User ${userId}`}</Typography>
                  </Box>
                  {variant === "post-preview" && (
                        <IconButton
                              className="ml-auto mb-auto"
                              onClick={handleClick}
                        >
                              <DeleteIcon className="text-red-500" />
                        </IconButton>
                  )}
            </Box>
      );
}

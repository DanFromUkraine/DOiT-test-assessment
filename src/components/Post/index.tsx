import { type Post } from "@/src/services/postsApi/types";
import { ListItem } from "@mui/material";
import PostHeader from "@/src/components/Post/PostHeader";
import PostPreviewFragment from "@/src/components/Post/PostPreviewFragment";
import PostDescriptionFragment from "@/src/components/Post/PostDescriptionFragment";
import { clsx } from "clsx";

export type PostCardVariants = "post-preview" | "post-details";

export default function PostCard({
      title,
      body,
      userId,
      id,
      variant,
}: Post & {
      variant: "post-preview" | "post-details";
}) {
      return (
            <ListItem
                  className={clsx("postCard", {
                        "w-10/12": variant === "post-details",
                  })}
            >
                  <PostHeader
                        title={title}
                        userId={userId}
                        variant={variant}
                        postId={id}
                  />
                  {variant === "post-preview" ? (
                        <PostPreviewFragment {...{ body, id }} />
                  ) : (
                        <PostDescriptionFragment body={body} />
                  )}
            </ListItem>
      );
}

import { IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function PostPreviewFragment({
      body,
      id,
}: {
      body: string;
      id: number;
}) {
      return (
            <>
                  <Typography>{`${body.slice(0, 50)}${body.length > 79 ? "..." : ""}`}</Typography>
                  <Link href={`/posts/${id}`}>
                        <IconButton className="justify-start">
                              <ArrowForwardIcon className="dark:text-white" />
                        </IconButton>
                  </Link>
            </>
      );
}

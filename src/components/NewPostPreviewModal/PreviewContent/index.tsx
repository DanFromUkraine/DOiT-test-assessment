"use client";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useFormDataForPreview } from "@/src/hooks/useFormDataForPreview";

export default function PreviewContent() {
      const formData = useFormDataForPreview();

      return (
            <Box className="p-5">
                  <Typography variant="h5">{formData.title}</Typography>
                  <Typography variant="subtitle2">{formData.body}</Typography>
            </Box>
      );
}

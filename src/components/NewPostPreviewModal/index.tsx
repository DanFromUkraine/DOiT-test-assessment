"use client";
//# refactoring is needed

import { Box, Dialog, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
      useClosePreview,
      useSelectDialogVisibility,
} from "@/src/features/createPostPreviewVisibilitySlice";
import EditButton from "@/src/components/NewPostPreviewModal/EditButton";
import ApproveButton from "@/src/components/NewPostPreviewModal/ApproveButton";
import PreviewContent from "@/src/components/NewPostPreviewModal/PreviewContent";

export default function NewPostPreviewModal() {
      const { isOpened } = useSelectDialogVisibility();
      const closeDialog = useClosePreview();

      return (
            <Dialog
                  open={isOpened}
                  onClose={closeDialog}
                  className="flex justify-center items-center "
                  slotProps={{
                        paper: {
                              className:
                                    "min-w-[45vw] dark:bg-containerDarkMode",
                        },
                  }}
            >
                  <Box className="flex flex-col">
                        <Typography className="p-5">
                              Попередній перегляд
                        </Typography>
                        <Divider />
                        <PreviewContent />
                        <Divider />
                        <Box className="p-2 flex justify-end gap-2">
                              <EditButton />
                              <ApproveButton />
                        </Box>
                  </Box>
            </Dialog>
      );
}

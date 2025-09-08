"use client";

import StepperContainer from "@/src/components/StepperContainer";
import { Box } from "@mui/material";
import SnackbarContainer from "@/src/components/StepperContainer/Snackbar";

export default function CreatePostPage() {
      return (
            <Box component="main" className="flex w-full justify-center pt-12 ">
                  <SnackbarContainer />
                  <StepperContainer />
            </Box>
      );
}

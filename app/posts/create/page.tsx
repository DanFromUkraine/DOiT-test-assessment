"use client";

import { StepsContextProvider } from "@/src/contexts/createPostStepsContext";
import StepperContainer from "@/src/components/StepperContainer";
import { Box } from "@mui/material";
import SnackbarContainer from "@/src/components/StepperContainer/Snackbar";

export default function CreatePostPage() {
      return (
            <Box component="main" className="flex w-full justify-center pt-12 ">
                  <SnackbarContainer />
                  <StepsContextProvider>
                        <StepperContainer />
                  </StepsContextProvider>
            </Box>
      );
}

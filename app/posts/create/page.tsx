"use client";

import { StepsContextProvider } from "@/src/contexts/createPostStepsContext";
import StepperContainer from "@/src/components/StepperContainer";
import { Box } from "@mui/material";

export default function CreatePostPage() {
      return (
            <Box component="main" className="flex justify-center pt-12 ">
                  <StepsContextProvider>
                        <StepperContainer />
                  </StepsContextProvider>
            </Box>
      );
}

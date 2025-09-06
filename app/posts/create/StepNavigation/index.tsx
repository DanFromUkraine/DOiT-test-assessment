"use client";

import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";
import { usePostPreviewModalContext } from "@/src/contexts/createPostPreviewModalContext";
import MoveBackButton from "@/app/posts/create/StepNavigation/MoveBackButton";
import MoveNextButton from "@/app/posts/create/StepNavigation/MoveNextButton";

export default function StepNavigation() {
      const { decrementStep, incrementStep, currentStep, allSteps } =
            useStepsContext();
      const { openModal, isShown } = usePostPreviewModalContext();

      return (
            <Box className="flex gap-2 justify-between">
                  <MoveBackButton />
                  <MoveNextButton />
            </Box>
      );
}

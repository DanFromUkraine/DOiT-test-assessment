"use client";

import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";
import PreviewIcon from "@mui/icons-material/Preview";
import { useOpenPreview } from "@/src/features/createPostPreviewVisibilitySlice";

export default function MoveNextButton() {
      const { incrementStep, currentStep, allSteps } = useStepsContext();
      const isNowLastStep = currentStep === allSteps.length - 1;
      const openDialog = useOpenPreview();

      return (
            <>
                  {isNowLastStep ? (
                        <Button onClick={openDialog} endIcon={<PreviewIcon />}>
                              Переглянути
                        </Button>
                  ) : (
                        <Button
                              onClick={incrementStep}
                              variant="contained"
                              endIcon={<SaveIcon />}
                        >
                              ЗБЕРЕГТИ
                        </Button>
                  )}
            </>
      );
}

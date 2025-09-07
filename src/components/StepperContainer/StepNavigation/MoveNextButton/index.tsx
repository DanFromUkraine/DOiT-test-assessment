"use client";

import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";
import PreviewIcon from "@mui/icons-material/Preview";
import { usePostPreviewModalContext } from "@/src/contexts/createPostPreviewModalContext";

export default function MoveNextButton() {
      const { incrementStep, currentStep, allSteps } = useStepsContext();
      const isNowLastStep = currentStep === allSteps.length - 1;
      const { openModal } = usePostPreviewModalContext();

      return (
            <>
                  {isNowLastStep ? (
                        <Button onClick={openModal} endIcon={<PreviewIcon />}>
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

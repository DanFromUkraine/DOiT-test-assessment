"use client";

import { useOpenPreview } from "@/src/features/createPostPreviewVisibilitySlice";
import { useIncrementStep, useSelectSteps } from "@/src/hooks/useSteps";
import {
      NextStepButtonUI,
      PreviewButtonUI,
} from "@/src/components/StepperContainer/StepNavigation/MoveNextButton/UI";

export default function MoveNextButton() {
      const { allSteps, currentStep } = useSelectSteps();
      const incrementStep = useIncrementStep();
      const isNowLastStep = currentStep === allSteps.length - 1;
      const openDialog = useOpenPreview();

      return isNowLastStep ? (
            <PreviewButtonUI openDialog={openDialog} />
      ) : (
            <NextStepButtonUI incrementStep={incrementStep} />
      );
}

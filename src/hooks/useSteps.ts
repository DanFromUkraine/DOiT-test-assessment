import { useState } from "react";
import { STEPS } from "@/src/constants/create-post-page-steps";

export function useSteps() {
      const [currentStep, setStepLocalOnly] = useState(0);
      const incrementStep = () => {
            if (currentStep === STEPS.length) return;
            setStepLocalOnly((prev) => prev + 1);
      };
      const decrementStep = () => {
            if (currentStep === 0) return;
            setStepLocalOnly((prev) => prev - 1);
      };
      const setStep = (newVal: number) => {
            if (newVal > STEPS.length || newVal < 0) return;
            setStepLocalOnly(newVal);
      };

      return {
            currentStep,
            setStep,
            incrementStep,
            decrementStep,
            allSteps: STEPS,
      };
}

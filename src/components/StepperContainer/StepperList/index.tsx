"use client";

import Stepper from "@mui/material/Stepper";
import { useSelectSteps } from "@/src/hooks/useSteps";
import StepItem from "@/src/components/StepperContainer/StepperList/StepItem";

export default function StepperList() {
      const { allSteps, currentStep } = useSelectSteps();

      return (
            <Stepper activeStep={currentStep} alternativeLabel className=" ">
                  {allSteps.map(({ label }, i) => (
                        <StepItem label={label} index={i} />
                  ))}
            </Stepper>
      );
}

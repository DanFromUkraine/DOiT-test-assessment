"use client";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepButton, StepLabel } from "@mui/material";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";

export default function StepperList() {
      const { currentStep, allSteps, setStep } = useStepsContext();
      return (
            <Stepper activeStep={currentStep} alternativeLabel className=" ">
                  {allSteps.map(({ label }, i) => (
                        <Step key={label} disabled={false}>
                              <StepButton
                                    onClick={() => setStep(i)}
                                    className="z-50"
                              >
                                    <StepLabel>{label}</StepLabel>
                              </StepButton>
                        </Step>
                  ))}
            </Stepper>
      );
}

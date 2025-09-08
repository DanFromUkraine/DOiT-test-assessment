"use client";

import Stepper from "@mui/material/Stepper";
import { useSelectSteps, useSetStep } from "@/src/hooks/useSteps";
import { Step, StepButton, StepLabel } from "@mui/material";

export default function StepperList() {
      const { allSteps, currentStep } = useSelectSteps();
      const setStep = useSetStep();

      return (
            <Stepper
                  activeStep={currentStep}
                  alternativeLabel
                  className="w-full"
            >
                  {allSteps.map(({ label }, i) => (
                        <Step disabled={false} key={i}>
                              <StepButton
                                    onClick={() => setStep(i)}
                                    sx={{ wordBreak: "break-all" }}
                              >
                                    <StepLabel
                                          slotProps={{
                                                label: {
                                                      className:
                                                            "dark:text-white",
                                                },
                                          }}
                                    >
                                          {label}
                                    </StepLabel>
                              </StepButton>
                        </Step>
                  ))}
            </Stepper>
      );
}

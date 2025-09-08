"use client";

import Step from "@mui/material/Step";
import { StepButton, StepLabel } from "@mui/material";
import { useSetStep } from "@/src/hooks/useSteps";

export default function StepItem({
      label,
      index,
}: {
      label: string;
      index: number;
}) {
      const setStep = useSetStep();

      return (
            <Step key={label} disabled={false}>
                  <StepButton onClick={() => setStep(index)}>
                        <StepLabel
                              slotProps={{
                                    label: {
                                          className: "dark:text-white",
                                    },
                              }}
                        >
                              {label}
                        </StepLabel>
                  </StepButton>
            </Step>
      );
}

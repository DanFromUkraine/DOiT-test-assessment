"use client";

import { StepEmptyBody, StepInputBody } from "./StepBody";
import { Fragment } from "react";
import { useSelectSteps } from "@/src/hooks/useSteps";

export default function RenderStepBodies() {
      const { allSteps } = useSelectSteps();

      return allSteps.map((step, i) => (
            <Fragment key={step.label}>
                  {step.type === "input" ? (
                        <StepInputBody
                              inputName={step.inputName}
                              label={step.inputLabel}
                              index={i}
                        />
                  ) : (
                        <StepEmptyBody />
                  )}
            </Fragment>
      ));
}

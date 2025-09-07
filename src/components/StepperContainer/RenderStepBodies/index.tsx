"use client";

import { StepEmptyBody, StepInputBody } from "./StepBody";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";
import { Fragment } from "react";

export default function RenderStepBodies() {
      const { allSteps } = useStepsContext();

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

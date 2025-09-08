"use client";

import { Controller, useFormContext } from "react-hook-form";
import { useSelectSteps } from "@/src/hooks/useSteps";
import TextFieldUI from "@/src/components/StepperContainer/RenderStepBodies/StepBody/UI";

export function StepInputBody({
      inputName,
      label,
      index,
}: {
      inputName: string;
      label: string;
      index: number;
}) {
      const { control } = useFormContext();
      const { currentStep } = useSelectSteps();
      const isVisible = index === currentStep;

      return (
            <Controller
                  name={inputName}
                  control={control}
                  render={({ field }) => (
                        <TextFieldUI {...{ ...field, label, isVisible }} />
                  )}
            />
      );
}

export function StepEmptyBody() {
      return <></>;
}

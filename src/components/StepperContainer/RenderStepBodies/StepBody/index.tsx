"use client";

import { Controller, useFormContext } from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";
import { clsx } from "clsx";
import TitleIcon from "@mui/icons-material/Title";

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
      const { currentStep } = useStepsContext();

      return (
            <Controller
                  name={inputName}
                  control={control}
                  render={({ field }) => (
                        <TextField
                              onChange={field.onChange}
                              defaultValue={field.value}
                              required
                              label={label}
                              variant="outlined"
                              slotProps={{
                                    input: {
                                          startAdornment: (
                                                <InputAdornment position="start">
                                                      <TitleIcon className="dark:text-white" />
                                                </InputAdornment>
                                          ),
                                          className: "dark:text-white",
                                    },
                                    inputLabel: {
                                          className: "dark:text-white",
                                    },
                              }}
                              className={clsx("ring-white myTextField", {
                                    hidden: index !== currentStep,
                              })}
                        />
                  )}
            />
      );
}

export function StepEmptyBody() {
      return <></>;
}

"use client";

import Box from "@mui/material/Box";
import { FormProvider, useForm } from "react-hook-form";
import StepperList from "@/app/posts/create/StepperList";
import RenderStepBodies from "./RenderStepBodies";
import StepNavigation from "@/app/posts/create/StepNavigation";
import { StepsContextProvider } from "@/src/contexts/createPostStepsContext";

interface FormData {
      title: string;
      body: string;
}

export default function CreatePostPage() {
      const methods = useForm<FormData>({
            defaultValues: {
                  title: "",
                  body: "",
            },
      });
      return (
            <StepsContextProvider>
                  <FormProvider {...methods}>
                        <form>
                              <Box
                                    component="main"
                                    className="flex justify-center pt-12"
                              >
                                    <Box className="flex w-[40%] flex-col gap-4 p-6 rounded-lg shadow-md bg-white">
                                          <StepperList />
                                          <RenderStepBodies />
                                          <StepNavigation />
                                    </Box>
                              </Box>
                        </form>
                  </FormProvider>
            </StepsContextProvider>
      );
}

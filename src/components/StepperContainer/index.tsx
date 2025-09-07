"use client";

import NewPostPreviewModal from "@/src/components/NewPostPreviewModal";
import Box from "@mui/material/Box";
import StepperList from "@/src/components/StepperContainer/StepperList";
import RenderStepBodies from "@/src/components/StepperContainer/RenderStepBodies";
import StepNavigation from "@/src/components/StepperContainer/StepNavigation";
import { FormProvider, useForm } from "react-hook-form";

export interface FormData {
      title: string;
      body: string;
}

export default function StepperContainer() {
      const methods = useForm<FormData>({
            defaultValues: {
                  title: "",
                  body: "",
            },
      });

      return (
            <FormProvider {...methods}>
                  <NewPostPreviewModal />
                  <form>
                        <Box
                              component="main"
                              className="flex justify-center pt-12 "
                        >
                              <Box className="flex w-[40%] flex-col gap-4 p-6 rounded-lg shadow-md bg-white dark:bg-containerDarkMode ">
                                    <StepperList />
                                    <RenderStepBodies />
                                    <StepNavigation />
                              </Box>
                        </Box>
                  </form>
            </FormProvider>
      );
}

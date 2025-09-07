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
                  <Box component="form" className="w-[40%]">
                        <Box className="flex flex-col gap-4 p-6 rounded-lg shadow-md bg-white dark:bg-containerDarkMode ">
                              <StepperList />
                              <RenderStepBodies />
                              <StepNavigation />
                        </Box>
                  </Box>

                  <NewPostPreviewModal />
            </FormProvider>
      );
}

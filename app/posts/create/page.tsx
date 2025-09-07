"use client";

import { StepsContextProvider } from "@/src/contexts/createPostStepsContext";
import { CreatePostModalContextProvider } from "@/src/contexts/createPostPreviewModalContext";
import StepperContainer from "@/src/components/StepperContainer";
import { SnackbarContextProvider } from "@/src/contexts/createPostSnackbarContext";
import NewPostPreviewModal from "@/src/components/NewPostPreviewModal";

export default function CreatePostPage() {
      return (
            <StepsContextProvider>
                  <CreatePostModalContextProvider>
                        <SnackbarContextProvider>
                              <StepperContainer />
                        </SnackbarContextProvider>
                  </CreatePostModalContextProvider>
            </StepsContextProvider>
      );
}

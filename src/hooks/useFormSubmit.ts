"use client";

import { Post } from "@/src/services/postsApi/types";
import { FormData } from "@/src/components/StepperContainer";
import { useOpenSnackbar } from "@/src/features/snackbarVisibilitySlice";
import { useCreatePostMutation } from "@/src/services/postsApi";
import { useFormContext } from "react-hook-form";

function formPostData(data: FormData): Post {
      return {
            ...data,
            userId: 123,
            id: 312,
      };
}

function getOnSuccessCallback(openSnackbar: () => void) {
      return () => {
            openSnackbar();
      };
}

export function useFormSubmit() {
      const { handleSubmit, reset } = useFormContext<FormData>();
      const openSnackbar = useOpenSnackbar();
      const [createPost] = useCreatePostMutation();

      return handleSubmit((data) => {
            reset();
            createPost(formPostData(data)).then(
                  getOnSuccessCallback(openSnackbar),
            );
      });
}

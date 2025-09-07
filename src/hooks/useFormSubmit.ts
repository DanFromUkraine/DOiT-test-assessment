"use client";

import { Post } from "@/src/services/postsApi/types";
import { FormData } from "@/src/components/StepperContainer";
import { useOpenSnackbar } from "@/src/features/snackbarVisibilitySlice";
import { useCreatePostMutation } from "@/src/services/postsApi";
import { useFormContext } from "react-hook-form";
import { useClosePreview } from "@/src/features/createPostPreviewVisibilitySlice";

function formPostData(data: FormData): Post {
      return {
            ...data,
            userId: 123,
            id: 312,
      };
}

export function useFormSubmit() {
      const { handleSubmit, reset } = useFormContext<FormData>();
      const openSnackbar = useOpenSnackbar();
      const [createPost] = useCreatePostMutation();
      const closePreviewDialog = useClosePreview();

      return handleSubmit(async (data) => {
            reset();
            closePreviewDialog();
            const res = await createPost(formPostData(data));
            res && openSnackbar();
      });
}

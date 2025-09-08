"use client";

import { Post } from "@/src/services/postsApi/types";
import { FormData } from "@/src/components/StepperContainer";
import { useOpenSnackbar } from "@/src/features/snackbarVisibilitySlice";
import { useFormContext } from "react-hook-form";
import { useClosePreview } from "@/src/features/createPostPreviewVisibilitySlice";
import { useCreatePost } from "@/src/hooks/usePostHooks";

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
      // const [createPost] = useCreatePostMutation();
      const createPost = useCreatePost();
      const closePreviewDialog = useClosePreview();

      return handleSubmit(async (data) => {
            reset();
            closePreviewDialog();
            await createPost(formPostData(data));
            openSnackbar();
      });
}

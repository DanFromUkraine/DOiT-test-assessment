"use client";

import {
      useCloseSnackbar,
      useSelectSnackbarVisibility,
} from "@/src/features/snackbarVisibilitySlice";
import { useRouter } from "next/navigation";
import SnackbarUI from "@/src/components/StepperContainer/Snackbar/UI";

export default function SnackbarContainer() {
      const { isOpened } = useSelectSnackbarVisibility();
      const close = useCloseSnackbar();
      const router = useRouter();
      const redirectToPosts = () => router.push("/posts");

      return (
            <SnackbarUI
                  isOpened={isOpened}
                  closeSnackbar={close}
                  onActionButtonClick={redirectToPosts}
            />
      );
}

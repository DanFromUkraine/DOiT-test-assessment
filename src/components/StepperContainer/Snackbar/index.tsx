"use client";

import { Snackbar } from "@mui/material";
import {
      useCloseSnackbar,
      useSelectSnackbarVisibility,
} from "@/src/features/snackbarVisibilitySlice";

export default function SnackbarContainer() {
      const { isOpened } = useSelectSnackbarVisibility();
      const close = useCloseSnackbar();

      return (
            <Snackbar
                  open={isOpened}
                  onClose={close}
                  message="Пост успішно створено!"
                  autoHideDuration={6_000}
            />
      );
}

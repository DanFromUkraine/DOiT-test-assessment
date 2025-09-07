"use client";

import { Snackbar } from "@mui/material";
import {
      useCloseSnackbar,
      useSelectSnackbarVisibility,
} from "@/src/features/snackbarVisibilitySlice";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function SnackbarContainer() {
      const { isOpened } = useSelectSnackbarVisibility();
      const close = useCloseSnackbar();
      const router = useRouter();

      return (
            <Snackbar
                  open={isOpened}
                  onClose={close}
                  message="Пост успішно створено!"
                  autoHideDuration={6_000}
                  action={
                        <Button onClick={() => router.push("/posts")}>
                              Перейти
                        </Button>
                  }
            />
      );
}

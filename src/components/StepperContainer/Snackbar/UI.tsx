import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";

export default function SnackbarUI({
      isOpened,
      onActionButtonClick,
      closeSnackbar,
}: {
      isOpened: boolean;
      onActionButtonClick: () => void;
      closeSnackbar: () => void;
}) {
      return (
            <Snackbar
                  open={isOpened}
                  onClose={close}
                  message="Пост успішно створено!"
                  autoHideDuration={6_000}
                  action={
                        <Button onClick={onActionButtonClick}>Перейти</Button>
                  }
            />
      );
}

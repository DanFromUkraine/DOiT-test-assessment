import Button from "@mui/material/Button";
import PreviewIcon from "@mui/icons-material/Preview";
import SaveIcon from "@mui/icons-material/Save";

export function PreviewButtonUI({ openDialog }: { openDialog: () => void }) {
      return (
            <Button onClick={openDialog} endIcon={<PreviewIcon />}>
                  Переглянути
            </Button>
      );
}

export function NextStepButtonUI({
      incrementStep,
}: {
      incrementStep: () => void;
}) {
      return (
            <Button
                  onClick={incrementStep}
                  variant="contained"
                  endIcon={<SaveIcon />}
            >
                  ЗБЕРЕГТИ
            </Button>
      );
}

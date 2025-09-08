"use client";

import { Button } from "@mui/material";
import { useClosePreview } from "@/src/features/createPostPreviewVisibilitySlice";
import { useSetStep } from "@/src/hooks/useSteps";

export default function EditButton() {
      const closeDialog = useClosePreview();
      const setStep = useSetStep();

      const onEditButtonClick = () => {
            closeDialog();
            setStep(0);
      };

      return <Button onClick={onEditButtonClick}>РЕДАГУВАТИ</Button>;
}

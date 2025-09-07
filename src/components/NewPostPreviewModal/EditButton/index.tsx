"use client";

import { Button } from "@mui/material";
import { useClosePreview } from "@/src/features/createPostPreviewVisibilitySlice";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";

export default function EditButton() {
      const closeDialog = useClosePreview();
      const { setStep } = useStepsContext();

      const onEditButtonClick = () => {
            closeDialog();
            setStep(0);
      };

      return <Button onClick={onEditButtonClick}>РЕДАГУВАТИ</Button>;
}

"use client";

import { Button } from "@mui/material";
import { useFormSubmit } from "@/src/hooks/useFormSubmit";

export default function ApproveButton() {
      const submit = useFormSubmit();

      return (
            <Button variant="contained" type="submit" onClick={submit}>
                  ПІДТВЕРДИТИ
            </Button>
      );
}

"use client";

import { Button } from "@mui/material";
import { useDecrementStep } from "@/src/hooks/useSteps";

export default function MoveBackButton() {
      const decrementStep = useDecrementStep();

      return <Button onClick={decrementStep}>НАЗАД</Button>;
}

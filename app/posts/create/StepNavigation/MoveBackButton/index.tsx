"use client";

import { Button } from "@mui/material";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";

export default function MoveBackButton() {
      const { decrementStep } = useStepsContext();
      return <Button onClick={decrementStep}>НАЗАД</Button>;
}

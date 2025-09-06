"use client";

import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";

export default function StepNavigation() {
      const { decrementStep, incrementStep, currentStep, allSteps } =
            useStepsContext();

      return (
            <Box className="flex gap-2 justify-between">
                  <Button onClick={decrementStep}>НАЗАД</Button>
                  <Button
                        onClick={incrementStep}
                        variant="contained"
                        endIcon={<SaveIcon />}
                  >
                        {currentStep === allSteps.length - 1
                              ? "ПЕРЕГЛЯНУТИ"
                              : "ЗБЕРЕГТИ"}
                  </Button>
            </Box>
      );
}

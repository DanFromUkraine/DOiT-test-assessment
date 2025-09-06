import { Box } from "@mui/material";
import MoveBackButton from "@/src/components/StepperContainer/StepNavigation/MoveBackButton";
import MoveNextButton from "@/src/components/StepperContainer/StepNavigation/MoveNextButton";

export default function StepNavigation() {
      return (
            <Box className="flex gap-2 justify-between">
                  <MoveBackButton />
                  <MoveNextButton />
            </Box>
      );
}

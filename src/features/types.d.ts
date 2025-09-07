import { Step, StepWithNoBody } from "@/src/constants/types";

export interface ThemeState {
      theme: "light" | "dark";
}

export interface Stepper {
      allSteps: (Step | StepWithNoBody)[];
      currentStep: number;
}

import createSimpleContextProviderPair from "@/src/utils/createSimpleContext";
import { STEPS } from "@/src/constants/create-post-page-steps";
import { Step, StepWithNoBody } from "@/src/constants/types";
import { useSteps } from "@/src/hooks/useSteps";

export type StepsContextDataType = {
      allSteps: (Step | StepWithNoBody)[];
      currentStep: number;
      incrementStep: () => void;
      decrementStep: () => void;
      setStep: (arg1: number) => void;
};

export const [StepsContextProvider, useStepsContext] =
      createSimpleContextProviderPair<StepsContextDataType, number>({
            defaultData: {
                  allSteps: STEPS,
                  currentStep: 0,
                  incrementStep() {},
                  decrementStep() {},
                  setStep() {},
            },
            useGetData: useSteps,
            contextName: "'Create post page steps context'",
      });

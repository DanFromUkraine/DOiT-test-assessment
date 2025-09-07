import { createSlice } from "@reduxjs/toolkit";
import { STEPS } from "@/src/constants/create-post-page-steps";
import { Stepper } from "@/src/features/types";

const initialState: Stepper = {
      allSteps: STEPS,
      currentStep: 0,
};

export const stepperSlice = createSlice({
      name: "stepper",
      initialState,
      reducers: {
            incrementStep(state) {
                  if (state.currentStep !== state.allSteps.length - 1) {
                        state.currentStep++;
                  }
            },
            decrementStep(state) {
                  if (state.currentStep !== 0) {
                        state.currentStep--;
                  }
            },
            setStep(state, { payload }: { payload: number }) {
                  if (payload >= 0 && payload < state.allSteps.length) {
                        state.currentStep = payload;
                  }
            },
      },
});

export const { incrementStep, decrementStep, setStep } = stepperSlice.actions;

export default stepperSlice.reducer;

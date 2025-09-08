"use client";

import { useDispatch, useSelector } from "react-redux";
import { Stepper } from "@/src/features/types";
import { RootState } from "@/src/store/store";
import {
      decrementStep,
      incrementStep,
      setStep,
} from "@/src/features/stepperSlice";

export function useSelectSteps() {
      return useSelector<RootState, Stepper>((state) => state.stepper);
}

export function useIncrementStep() {
      const dispatch = useDispatch();
      return () => dispatch(incrementStep());
}

export function useDecrementStep() {
      const dispatch = useDispatch();
      return () => dispatch(decrementStep());
}

export function useSetStep() {
      const dispatch = useDispatch();
      return (step: number) => dispatch(setStep(step));
}

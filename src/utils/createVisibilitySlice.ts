"use client";

import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

export interface VisibilityState {
      isOpened: boolean;
}

export function createVisibilitySlice({
      name,
      openedByDefault,
}: {
      name: string;
      openedByDefault: boolean;
}) {
      const initialState: VisibilityState = {
            isOpened: openedByDefault,
      };

      const slice = createSlice({
            name: name,
            initialState,
            reducers: {
                  open(state) {
                        state.isOpened = true;
                  },
                  close(state) {
                        state.isOpened = false;
                  },
            },
      });

      const { open, close } = slice.actions;

      function useSelect() {
            return useSelector<RootState, VisibilityState>(
                  (state) => state[name as keyof RootState] as VisibilityState,
            );
      }

      function useOpen() {
            const dispatch = useDispatch();
            return () => {
                  dispatch(open());
            };
      }

      function useClose() {
            const dispatch = useDispatch();
            return () => {
                  dispatch(close());
            };
      }

      return [slice, useSelect, useOpen, useClose] as const;
}

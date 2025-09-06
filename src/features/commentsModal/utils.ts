"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { CommentsModalState } from "@/src/features/types";
import { commentsModalSlice } from "@/src/features/commentsModal/index";

const { openModal, closeModal } = commentsModalSlice.actions;

export const useSelectCommentModalInfo = () =>
      useSelector<RootState, CommentsModalState>(
            (state) => state.commentsModal,
      );

export function useGetOpenCommentsModalFn() {
      const dispatch = useDispatch();
      return () => {
            console.log("should now open");
            dispatch(openModal());
      };
}

export function useGetCloseCommentsModalFn() {
      const dispatch = useDispatch();
      return () => {
            dispatch(closeModal());
      };
}

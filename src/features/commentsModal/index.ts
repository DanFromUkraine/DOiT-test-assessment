import { createSlice } from "@reduxjs/toolkit";
import { CommentsModalState } from "@/src/features/types";

const initialState: CommentsModalState = {
      isOpened: false,
};

export const commentsModalSlice = createSlice({
      name: "commentsModalSlice",
      initialState,
      reducers: {
            openModal(state) {
                  state.isOpened = true;
            },
            closeModal(state) {
                  state.isOpened = false;
            },
      },
});

export default commentsModalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { SidebarState } from "@/src/features/types";

const initialState: SidebarState = {
      isOpened: false,
};

export const sidebarSlice = createSlice({
      name: "sidebar",
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

export default sidebarSlice.reducer;

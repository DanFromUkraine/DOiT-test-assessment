import { createVisibilitySlice } from "@/src/utils/createVisibilitySlice";

export const [
      snackbarSlice,
      useSelectSnackbarVisibility,
      useOpenSnackbar,
      useCloseSnackbar,
] = createVisibilitySlice({
      name: "snackbarVisibility",
      openedByDefault: false,
});

export default snackbarSlice.reducer;

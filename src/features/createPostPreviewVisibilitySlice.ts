import { createVisibilitySlice } from "@/src/utils/createVisibilitySlice";

export const [
      createPostPreviewVisibilitySlice,
      useSelectDialogVisibility,
      useOpenPreview,
      useClosePreview,
] = createVisibilitySlice({
      name: "createPostPreviewVisibility",
      openedByDefault: false,
});

export default createPostPreviewVisibilitySlice.reducer;

import { createVisibilitySlice } from "@/src/utils/createVisibilitySlice";

export const [
      commentsVisibilitySlice,
      useSelectCommentsVisibility,
      useOpenComments,
      useCloseComments,
] = createVisibilitySlice({
      name: "commentsVisibility",
      openedByDefault: false,
});

export default commentsVisibilitySlice.reducer;

import { createVisibilitySlice } from "@/src/utils/createVisibilitySlice";

export const [
      drawerSlice,
      useSelectDrawerVisibility,
      useOpenDrawer,
      useCloseDrawer,
] = createVisibilitySlice({
      name: "drawerVisibility",
      openedByDefault: false,
});

export default drawerSlice.reducer;

"use client";

import OpenDrawerButtonUI from "@/src/components/AppHeader/OpenDrawerButton/UI";
import { useOpenDrawer } from "@/src/features/drawerVisibilitySlice";

export default function OpenDrawerButton() {
      const openDrawer = useOpenDrawer();

      return <OpenDrawerButtonUI onClick={openDrawer} />;
}

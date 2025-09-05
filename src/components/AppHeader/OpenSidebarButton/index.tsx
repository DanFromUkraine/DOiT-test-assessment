"use client";

import OpenSidebarButtonUI from "@/src/components/AppHeader/OpenSidebarButton/UI";
import {
      useGetOpenSidebarFn,
      useSelectSidebarInfo,
} from "@/src/features/sidebar/utils";

export default function OpenSidebarButton() {
      const openSidebar = useGetOpenSidebarFn();
      const sidebarOpened = useSelectSidebarInfo();

      console.log({ sidebarOpened });

      return <OpenSidebarButtonUI onClick={openSidebar} />;
}

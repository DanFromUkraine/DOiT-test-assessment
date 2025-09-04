"use client"

import OpenSidebarButtonUI from "@/app/Header/OpenSidebarButton/UI";
import {useGetOpenSidebarFn, useGetSidebarOpened} from "@/app/lib/redux-toolkit/features/sidebar/utils";

export default function OpenSidebarButton() {
    const openSidebar = useGetOpenSidebarFn();
    const sidebarOpened = useGetSidebarOpened();

    console.log({sidebarOpened})

    return <OpenSidebarButtonUI onClick={openSidebar}/>
}
"use client";

import { Box, Drawer, List } from "@mui/material";
import {
      useGetCloseSidebarFn,
      useSelectSidebarInfo,
} from "@/src/features/sidebar/utils";
import { NAVIGATION_LIST } from "@/src/constants/navigation";
import NavItem from "@/src/components/DrawerNav/NavItem";

export default function Sidebar() {
      const { isOpened } = useSelectSidebarInfo();
      const hideSidebar = useGetCloseSidebarFn();

      return (
            <Drawer open={isOpened} onClose={hideSidebar}>
                  <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={hideSidebar}
                        className="dark:bg-containerDarkMode h-full dark:!text-white"
                  >
                        <List>
                              {NAVIGATION_LIST.map((navItem, index) => (
                                    <NavItem {...navItem} key={index} />
                              ))}
                        </List>
                  </Box>
            </Drawer>
      );
}

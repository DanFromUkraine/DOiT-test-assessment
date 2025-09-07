"use client";

import { Box, Drawer, List } from "@mui/material";
import { NAVIGATION_LIST } from "@/src/constants/navigation";
import NavItem from "@/src/components/DrawerNav/NavItem";
import {
      useCloseDrawer,
      useSelectDrawerVisibility,
} from "@/src/features/drawerVisibilitySlice";

export default function DrawerContainer() {
      const { isOpened } = useSelectDrawerVisibility();
      const closeDrawer = useCloseDrawer();

      return (
            <Drawer open={isOpened} onClose={closeDrawer}>
                  <Box
                        sx={{ width: 250 }}
                        role="presentation"
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

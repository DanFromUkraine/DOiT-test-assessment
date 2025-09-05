import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ChangeThemeButton from "@/src/components/AppHeader/ChangeThemeButton";
import OpenSidebarButton from "@/src/components/AppHeader/OpenSidebarButton";
import Logo from "@/src/components/AppHeader/Logo";

export default function Header() {
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                        <Toolbar>
                              <OpenSidebarButton />
                              <Logo />
                              <ChangeThemeButton />
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}

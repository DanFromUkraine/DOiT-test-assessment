import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ChangeThemeButton from "@/src/components/AppHeader/ChangeThemeButton";
import OpenSidebarButton from "@/src/components/AppHeader/OpenSidebarButton";
import Logo from "@/src/components/AppHeader/Logo";
import OpenCommentsButton from "@/src/components/AppHeader/OpenCommentsButton";

export default function Header() {
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static" className="bg-[#2196f3]">
                        <Toolbar>
                              <OpenSidebarButton />
                              <Logo />
                              <ChangeThemeButton />
                              <OpenCommentsButton />
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}

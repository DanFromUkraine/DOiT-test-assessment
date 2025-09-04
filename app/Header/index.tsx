import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ChangeThemeButton from "@/app/Header/ChangeThemeButton";
import OpenSidebarButton from "@/app/Header/OpenSidebarButton";
import Logo from "@/app/Header/Logo";

export default function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <OpenSidebarButton/>
                    <Logo/>
                    <ChangeThemeButton/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

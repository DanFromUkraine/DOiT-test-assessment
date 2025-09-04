"use client"

import Button from "@mui/material/Button";
import {useSelectTheme, useToggleTheme} from "@/app/lib/redux-toolkit/features/utils";
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function ChangeThemeButton() {
    const theme = useSelectTheme();
    const toggleTheme = useToggleTheme();
    const onButtonClick = () => {
        toggleTheme();
    }

    return <Button onClick={onButtonClick}>{theme === "light" ? <LightModeIcon className="text-white"/> :
        <Brightness4Icon className="text-white"/>}</Button>
}
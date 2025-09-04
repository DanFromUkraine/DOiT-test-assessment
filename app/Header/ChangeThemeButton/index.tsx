"use client"

import {useSelectTheme, useToggleTheme} from "@/app/lib/redux-toolkit/features/theme/utils";
import ChangeThemeButtonUI from "@/app/Header/ChangeThemeButton/UI";

export default function ChangeThemeButton() {
    const {theme} = useSelectTheme();
    const toggleTheme = useToggleTheme();
    const onButtonClick = () => {
        toggleTheme();
    }

    return <ChangeThemeButtonUI theme={theme} onButtonClick={onButtonClick}/>
}
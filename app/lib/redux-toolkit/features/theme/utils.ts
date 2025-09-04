"use client"

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/lib/redux-toolkit/types";
import {ThemeState} from "@/app/lib/redux-toolkit/features/theme/types";
import {themeSlice} from "@/app/lib/redux-toolkit/features/theme/index";

const {toggleTheme} = themeSlice.actions;

export const useSelectTheme = () => useSelector<RootState, ThemeState>(state => state.theme as ThemeState);

export function useToggleTheme() {
    const dispatch = useDispatch();
    return () => dispatch(toggleTheme());
}
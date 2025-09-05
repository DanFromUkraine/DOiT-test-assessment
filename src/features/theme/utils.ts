"use client"

import {useDispatch, useSelector} from "react-redux";
import {themeSlice} from "@/src/features/theme/index";
import {RootState} from "@/src/store/store";
import {ThemeState} from "@/src/features/types";

const {toggleTheme, setDark} = themeSlice.actions;

export const useSelectTheme = () => useSelector<RootState, ThemeState>(state => state.theme as ThemeState);

export function useToggleTheme() {
    const dispatch = useDispatch();
    return () => dispatch(toggleTheme());
}

export function useSetDarkTheme() {
    const dispatch = useDispatch();
    return () => dispatch(setDark());
}

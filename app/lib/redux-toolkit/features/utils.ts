"use client"

import {themeSlice} from "@/app/lib/redux-toolkit/features/themeSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/lib/redux-toolkit/types";
import {ThemeState} from "@/app/lib/redux-toolkit/features/types";

const {toggleTheme} = themeSlice.actions;
export const useSelectTheme = () => useSelector<RootState, ThemeState>(state => state.theme);

export function useToggleTheme() {
    const dispatch = useDispatch();
    return () => dispatch(toggleTheme());
}
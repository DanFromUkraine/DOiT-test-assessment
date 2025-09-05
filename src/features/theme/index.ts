import {createSlice} from "@reduxjs/toolkit";
import {ThemeState} from "@/app/lib/redux-toolkit/types";


const initialState: ThemeState = {
    theme: "light"
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        setDark(state) {
            state.theme = "dark";
        }
    }
})

export default themeSlice.reducer;
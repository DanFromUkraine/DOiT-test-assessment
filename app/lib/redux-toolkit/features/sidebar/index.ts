import {createSlice} from "@reduxjs/toolkit";
import {SidebarState} from "@/app/lib/redux-toolkit/features/sidebar/types";


const initialState: SidebarState = {
    isOpened: false
}

export const sidebarSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        open(state) {
            state.isOpened = true
        }, close(state) {
            state.isOpened = false
        }
    }
})

export default sidebarSlice.reducer;
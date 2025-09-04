import {sidebarSlice} from "@/app/lib/redux-toolkit/features/sidebar/index";
import {useDispatch, useSelector} from "react-redux";
import {SidebarState} from "@/app/lib/redux-toolkit/features/sidebar/types";
import {RootState} from "@/app/lib/redux-toolkit/types";


const {open, close} = sidebarSlice.actions;

export function useGetSidebarOpened() {
    return useSelector<RootState, SidebarState>(state => state.sidebar);
}

export function useGetOpenSidebarFn() {
    const dispatch = useDispatch();
    return () => {
        dispatch(open());
    }
}

export function useGetCloseSidebarFn() {
    const dispatch = useDispatch();
    return () => {
        dispatch(close());
    }
}
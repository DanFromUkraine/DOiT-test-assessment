import { useDispatch, useSelector } from "react-redux";
import { sidebarSlice } from "@/src/features/sidebar";
import { RootState } from "@/src/store/store";
import { SidebarState } from "@/src/features/types";

const { open, close } = sidebarSlice.actions;

export const useSelectSidebarInfo = () =>
      useSelector<RootState, SidebarState>((state) => state.sidebar);

export function useGetOpenSidebarFn() {
      const dispatch = useDispatch();
      return () => {
            dispatch(open());
      };
}

export function useGetCloseSidebarFn() {
      const dispatch = useDispatch();
      return () => {
            dispatch(close());
      };
}

import {store} from "@/app/lib/redux-toolkit/store";
import {useSelector} from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

"use client"

import {ReactNode} from 'react'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import "./globals.css"
import Header from "@/src/components/AppHeader";
import {Provider} from "react-redux";
import Sidebar from "@/src/components/DrawerNav";
import {store} from "@/src/store/store";
import HookInitializers from "@/src/components/Initializers";


export default function layout({children}: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <AppRouterCacheProvider options={{enableCssLayer: true}}>
                <HookInitializers/>
                <html lang="uk">
                <body className="w-full flex flex-col">
                <Sidebar/>
                <Header/>
                {children}

                </body>
                </html>
            </AppRouterCacheProvider>
        </Provider>


    )
}

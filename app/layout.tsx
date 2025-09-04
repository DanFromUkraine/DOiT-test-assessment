"use client"

import {ReactNode} from 'react'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import "./globals.css"
import Header from "@/app/Header";
import {Provider} from "react-redux";
import {store} from "./lib/redux-toolkit/store"

export default function layout({children}: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <AppRouterCacheProvider options={{enableCssLayer: true}}>
                <html lang="uk">
                <body className="w-full flex flex-col">
                <Header/>
                {children}

                </body>
                </html>
            </AppRouterCacheProvider>
        </Provider>


    )
}

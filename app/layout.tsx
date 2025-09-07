"use client";

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import Header from "@/src/components/AppHeader";
import { Provider } from "react-redux";
import Sidebar from "@/src/components/DrawerNav";
import { store } from "@/src/store/store";
import { Box } from "@mui/material";

export default function layout({ children }: { children: ReactNode }) {
      return (
            <Provider store={store}>
                  <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                        <Box component="html" lang="uk">
                              <Box
                                    component="body"
                                    className="w-full flex flex-col dark:bg-black"
                              >
                                    <Sidebar />
                                    <Header />
                                    {children}
                              </Box>
                        </Box>
                  </AppRouterCacheProvider>
            </Provider>
      );
}

"use client";

import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import { NAVIGATION_LIST } from "@/src/constants/navigation";

export default function Logo() {
      const pathname = usePathname();
      const DEFAULT_TITLE = "DOiT MVP";
      const navItem = NAVIGATION_LIST.find((item) => item.href === pathname);

      return (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {navItem?.name || DEFAULT_TITLE}
            </Typography>
      );
}

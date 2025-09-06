"use client";

import { usePathname } from "next/navigation";

export function useGetPostId() {
      const pathname = usePathname();
      const strId = pathname.split("/").pop();

      return Number(strId);
}

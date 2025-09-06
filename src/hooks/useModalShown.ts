"use client";

import { useCallback, useState } from "react";

export function useModalShown() {
      const [isShown, setVisibility] = useState(() => false);
      const openModal = useCallback(() => {
            setVisibility(true);
      }, []);
      const closeModal = useCallback(() => {
            setVisibility(false);
      }, []);

      return { isShown, openModal, closeModal };
}

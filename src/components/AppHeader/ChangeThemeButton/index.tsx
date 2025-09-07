"use client";

import ChangeThemeButtonUI from "@/src/components/AppHeader/ChangeThemeButton/UI";
import { useSelectTheme, useToggleTheme } from "@/src/features/themeSlice";

export default function ChangeThemeButton() {
      const { theme } = useSelectTheme();
      const toggleTheme = useToggleTheme();

      return <ChangeThemeButtonUI theme={theme} onButtonClick={toggleTheme} />;
}

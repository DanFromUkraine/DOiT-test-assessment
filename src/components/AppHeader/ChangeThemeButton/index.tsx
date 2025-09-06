"use client";

import ChangeThemeButtonUI from "@/src/components/AppHeader/ChangeThemeButton/UI";
import { useSelectTheme, useToggleTheme } from "@/src/features/theme/utils";

export default function ChangeThemeButton() {
      const { theme } = useSelectTheme();
      const toggleTheme = useToggleTheme();
      const onButtonClick = () => {
            toggleTheme();
      };

      return (
            <ChangeThemeButtonUI theme={theme} onButtonClick={onButtonClick} />
      );
}

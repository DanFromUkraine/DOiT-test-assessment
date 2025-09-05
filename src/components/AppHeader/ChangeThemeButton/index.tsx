"use client";

import ChangeThemeButtonUI from "@/src/components/AppHeader/ChangeThemeButton/UI";
import { useToggleThemeAndSyncWithLS } from "@/src/hooks/theme";
import { useSelectTheme } from "@/src/features/theme/utils";

export default function ChangeThemeButton() {
      const { theme } = useSelectTheme();
      const toggleTheme = useToggleThemeAndSyncWithLS();
      const onButtonClick = () => {
            toggleTheme();
      };

      return (
            <ChangeThemeButtonUI theme={theme} onButtonClick={onButtonClick} />
      );
}

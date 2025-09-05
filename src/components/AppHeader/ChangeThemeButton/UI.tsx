import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ThemeState } from "@/src/features/types";

export default function ChangeThemeButtonUI({
      onButtonClick,
      theme,
}: {
      onButtonClick: () => void;
      theme: ThemeState["theme"];
}) {
      return (
            <Button onClick={onButtonClick}>
                  {theme === "light" ? (
                        <LightModeIcon className="text-white" />
                  ) : (
                        <Brightness4Icon className="text-white" />
                  )}
            </Button>
      );
}

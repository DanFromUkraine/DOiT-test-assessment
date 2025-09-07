import IconButton from "@mui/material/IconButton";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function OpenDrawerButtonUI({
      onClick,
}: {
      onClick: () => void;
}) {
      return (
            <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={onClick}
            >
                  <MenuIcon />
            </IconButton>
      );
}

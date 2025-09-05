import { SvgIconComponent } from "@mui/icons-material";

export type NavigationItem = {
      href: string;
      name: string;
      Icon: SvgIconComponent;
};

export type NavigationList = NavigationItem[];

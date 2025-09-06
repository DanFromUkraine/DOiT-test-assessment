import { SvgIconComponent } from "@mui/icons-material";

export type NavigationItem = {
      href: string;
      name: string;
      Icon: SvgIconComponent;
};

export type NavigationList = NavigationItem[];

export type Step = {
      label: string;
      inputName: string;
      inputLabel: string;
      type: "input";
};

export type StepWithNoBody = {
      label: string;
      type: "empty";
};

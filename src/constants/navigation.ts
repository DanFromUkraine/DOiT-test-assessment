import { NavigationList } from "@/src/constants/types";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const NAVIGATION_LIST: NavigationList = [
      {
            href: "/",
            name: "DOiT MVP",
            Icon: HomeIcon,
      },
      {
            href: "/posts",
            name: "Усі пости",
            Icon: FormatListBulletedIcon,
      },
      {
            href: "/posts/create",
            name: "Створити пост",
            Icon: AddCircleIcon,
      },
];

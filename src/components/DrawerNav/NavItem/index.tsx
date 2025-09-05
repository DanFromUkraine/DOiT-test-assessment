import { NavigationItem } from "@/src/constants/types";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

export default function NavItem({ name, href, Icon }: NavigationItem) {
      return <Link href={href}>
            <ListItem disablePadding>
                  <ListItemButton>
                        <ListItemIcon>
                              <Icon className="dark:text-white" />
                        </ListItemIcon>
                        <ListItemText
                              primary={name}
                        />
                  </ListItemButton>
            </ListItem>
      </Link>;


}
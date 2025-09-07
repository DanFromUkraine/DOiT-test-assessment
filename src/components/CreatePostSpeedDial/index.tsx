import { SpeedDial, SpeedDialIcon } from "@mui/material";
import { redirect } from "next/navigation";

export default function CreatePostSpeedDial() {
      const onClick = () => {
            redirect("/posts/create");
      };

      return (
            <SpeedDial
                  ariaLabel="go to create post page"
                  onClick={onClick}
                  icon={<SpeedDialIcon />}
                  className="fixed bottom-8 right-8"
            ></SpeedDial>
      );
}

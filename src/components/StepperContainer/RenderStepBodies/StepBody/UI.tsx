import { InputAdornment, TextField } from "@mui/material";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import TitleIcon from "@mui/icons-material/Title";
import { clsx } from "clsx";

export default function TextFieldUI({
      onChange,
      value,
      label,
      isVisible,
      ref,
}: ControllerRenderProps<FieldValues, string> & {
      label: string;
      isVisible: boolean;
}) {
      return (
            <TextField
                  ref={ref}
                  onChange={onChange}
                  defaultValue={value}
                  required
                  label={label}
                  variant="outlined"
                  slotProps={{
                        input: {
                              startAdornment: (
                                    <InputAdornment position="start">
                                          <TitleIcon className="dark:text-white" />
                                    </InputAdornment>
                              ),
                              className: "dark:text-white",
                        },
                        inputLabel: {
                              className: "dark:text-white",
                        },
                  }}
                  className={clsx("ring-white myTextField", {
                        hidden: !isVisible,
                  })}
            />
      );
}

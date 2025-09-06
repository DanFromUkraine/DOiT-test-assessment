"use client";

import { Box, Button, Dialog, Divider } from "@mui/material";
import { usePostPreviewModalContext } from "@/src/contexts/createPostPreviewModalContext";
import { useFormContext } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { type FormData } from "../page";
import { useEffect, useState } from "react";
import { useStepsContext } from "@/src/contexts/createPostStepsContext";

export default function NewPostPreviewModal() {
      const { isShown, closeModal } = usePostPreviewModalContext();
      const { getValues, reset } = useFormContext<FormData>();
      const { setStep } = useStepsContext();
      const [formData, setFormData] = useState<FormData>({
            title: "",
            body: "",
      });

      console.log("render");

      useEffect(() => {
            const data = getValues();
            setFormData(data);
      }, [isShown]);

      const onEditButtonClick = () => {
            closeModal();
            setStep(0);
      };

      const onApproveButtonClick = () => {
            closeModal();
            setStep(0);
            reset();
      };

      return (
            <Dialog
                  open={isShown}
                  onClose={closeModal}
                  className="flex justify-center items-center"
            >
                  <Box className="flex flex-col min-w-[45vw]">
                        <Typography className="p-5">
                              Попередній перегляд
                        </Typography>
                        <Divider />
                        <Box className="p-5">
                              <Typography variant="h5">
                                    {formData.title}
                              </Typography>
                              <Typography variant="subtitle2">
                                    {formData.body}
                              </Typography>
                        </Box>
                        <Divider />
                        <Box className="p-2 flex justify-end gap-2">
                              <Button onClick={onEditButtonClick}>
                                    РЕДАГУВАТИ
                              </Button>
                              <Button
                                    variant="contained"
                                    onClick={onApproveButtonClick}
                              >
                                    ПІДТВЕРДИТИ
                              </Button>
                        </Box>
                  </Box>
            </Dialog>
      );
}

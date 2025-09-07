import { useFormContext } from "react-hook-form";
import { FormData } from "@/src/components/StepperContainer";
import { useEffect, useState } from "react";
import { useSelectDialogVisibility } from "@/src/features/createPostPreviewVisibilitySlice";

export function useFormDataForPreview() {
      const { isOpened } = useSelectDialogVisibility();
      const { getValues } = useFormContext<FormData>();

      const [formData, setFormData] = useState<FormData>({
            title: "",
            body: "",
      });

      useEffect(() => {
            const data = getValues();
            setFormData(data);
      }, [isOpened]);

      return formData;
}

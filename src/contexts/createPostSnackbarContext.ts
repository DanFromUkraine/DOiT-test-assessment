import createSimpleContextProviderPair from "@/src/utils/createSimpleContext";
import { ModalVisibility } from "@/src/contexts/types";
import { useModalShown } from "@/src/hooks/useModalShown";

export const [SnackbarContextProvider, useSnackbarModalContext] =
      createSimpleContextProviderPair<ModalVisibility>({
            contextName: "create post snackbar context",
            defaultData: {
                  isShown: false,
                  openModal() {},
                  closeModal() {},
            },
            useGetData: useModalShown,
      });

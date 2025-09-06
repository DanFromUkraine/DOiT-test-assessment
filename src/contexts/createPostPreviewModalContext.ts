import createSimpleContextProviderPair from "@/src/utils/createSimpleContext";
import { useModalShown } from "@/src/hooks/useModalShown";

interface CreatePostModalContextDataType {
      isShown: boolean;
      openModal: () => void;
      closeModal: () => void;
}

export const [
      CreatePostModalContext,
      CreatePostModalContextProvider,
      usePostPreviewModalContext,
] = createSimpleContextProviderPair<CreatePostModalContextDataType>({
      defaultData: {
            isShown: false,
            openModal() {},
            closeModal() {},
      },
      useGetData: useModalShown,
      contextName: "'Create post page modal opened context'",
});

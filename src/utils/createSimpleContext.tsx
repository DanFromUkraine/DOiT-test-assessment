import { Context, createContext, ReactNode } from "react";
import { useContextEnhanced } from "@/src/hooks/useContextEnhanced";

interface SimpleCtxProviderProps<DataType> {
      defaultData: DataType;
      useGetData: () => DataType;
}

export default function createSimpleContextProviderPair<
      DataType,
      HookProps = void,
>({
      defaultData,
      useGetData,
      contextName,
}: {
      defaultData: DataType;
      useGetData: () => DataType;
      contextName: string;
}) {
      const Context = createContext<DataType>(defaultData);

      const Provider = ({ children }: { children: ReactNode }) => {
            const data = useGetData();

            return <Context.Provider value={data}>{children}</Context.Provider>;
      };

      const getter = () => useContextEnhanced({ Context, contextName });

      return [Provider, getter] as const;
}

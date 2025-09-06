import { Context, createContext, ReactNode } from "react";

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
}: {
      defaultData: DataType;
      useGetData: () => DataType;
}) {
      const Context = createContext<DataType>(defaultData);

      const Provider = ({ children }: { children: ReactNode }) => {
            const data = useGetData();

            return <Context.Provider value={data}>{children}</Context.Provider>;
      };

      return [Context, Provider] as const;
}

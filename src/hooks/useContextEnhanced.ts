import { type Context, useContext } from "react";

export function useContextEnhanced<DataType>({
      contextName,
      Context,
}: {
      contextName: string;
      Context: Context<DataType>;
}) {
      const data = useContext(Context);

      if (typeof data === "undefined")
            throw `Could not retrieve data from ${contextName}. Data is undefined. Double-check this hook is used under ${contextName} provider;`;
      return data;
}

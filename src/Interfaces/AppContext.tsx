import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

export interface AppContextType {
  lastSearchString: string;
  lastSearchParam: string;
  updateContext: (newSearchTerm: string, newSearchParam: string) => void;
}

export const curatorContext = createContext<AppContextType>({
  lastSearchString: "England",
  lastSearchParam: "None",
  updateContext: (newSearchTerm: string, newSearchParam: string) => {},
});

export const CuratorContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [lastSearchString, setLastSearchString] = useState("England");
  const [lastSearchParam, setLastSearchParam] = useState("None");

  const updateContext = (newSearchString: string, newSearchParam: string) => {
    setLastSearchString(newSearchString);
    setLastSearchParam(newSearchParam);
  };

  const contextValue = React.useMemo(
    () => ({
      lastSearchString,
      lastSearchParam,
      updateContext,
    }),
    [lastSearchString, lastSearchParam, updateContext]
  );

  return (
    <curatorContext.Provider value={contextValue}>
      {children}
    </curatorContext.Provider>
  );
};

export default curatorContext;

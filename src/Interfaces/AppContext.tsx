import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { ArtObject } from "./ArtObject";

export interface AppContextType {
  lastSearchString: string;
  lastSearchParam: string;
  exhibtionContent: ArtObject[];
  updateContext: (newSearchTerm: string, newSearchParam: string) => void;
  updateExhibition: (newObject: ArtObject, remove: boolean) => void;
}

export const curatorContext = createContext<AppContextType>({
  lastSearchString: "England",
  lastSearchParam: "None",
  exhibtionContent: [],
  updateContext: (newSearchTerm: string, newSearchParam: string) => {},
  updateExhibition: (newObject: ArtObject, remove: boolean) => {},
});

export const CuratorContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [lastSearchString, setLastSearchString] = useState("England");
  const [lastSearchParam, setLastSearchParam] = useState("None");
  const [exhibtionContent, setExhibitionContent] = useState<ArtObject[]>([]);

  const updateContext = (newSearchString: string, newSearchParam: string) => {
    setLastSearchString(newSearchString);
    setLastSearchParam(newSearchParam);
  };

  const updateExhibition = (newObject: ArtObject, remove: boolean = false) => {
    let newExhibition = [...exhibtionContent];
    if (remove) {
      newExhibition = [];
      exhibtionContent.forEach((piece) => {
        if (piece.title !== newObject.title) {
          newExhibition.push(piece);
        }
      });
    } else {
      newExhibition = [...exhibtionContent, newObject];
    }

    setExhibitionContent(newExhibition);
  };

  const contextValue = React.useMemo(
    () => ({
      lastSearchString,
      lastSearchParam,
      exhibtionContent,
      updateContext,
      updateExhibition,
    }),
    [
      lastSearchString,
      lastSearchParam,
      exhibtionContent,
      updateContext,
      updateExhibition,
    ]
  );

  return (
    <curatorContext.Provider value={contextValue}>
      {children}
    </curatorContext.Provider>
  );
};

export default curatorContext;

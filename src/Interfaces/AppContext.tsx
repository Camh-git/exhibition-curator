import React, { createContext, useState, PropsWithChildren } from "react";
import { PlaceHolderArt } from "./PlaceHolderArtOBJ";
import { ArtObject } from "./ArtObject";

export interface AppContextType {
  lastSearchString: string;
  lastSearchParam: string;
  exhibtionContent: ArtObject[];
  focusedPiece: ArtObject;
  updateSearch: (newSearchTerm: string, newSearchParam: string) => void;
  updateExhibition: (newObject: ArtObject, remove: boolean) => void;
  updateFocusedPiece: (newPiece: ArtObject) => void;
}

export const curatorContext = createContext<AppContextType>({
  lastSearchString: "England",
  lastSearchParam: "None",
  exhibtionContent: [],
  focusedPiece: PlaceHolderArt(),
  updateSearch: (newSearchTerm: string, newSearchParam: string) => {},
  updateExhibition: (newObject: ArtObject, remove: boolean) => {},
  updateFocusedPiece: (newPiece: ArtObject) => {},
});

export const CuratorContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [lastSearchString, setLastSearchString] = useState("England");
  const [lastSearchParam, setLastSearchParam] = useState("None");
  const [exhibtionContent, setExhibitionContent] = useState<ArtObject[]>([]);
  const [focusedPiece, setFocusedPiece] = useState<ArtObject>(PlaceHolderArt());

  const updateSearch = (newSearchString: string, newSearchParam: string) => {
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
  const updateFocusedPiece = (newPiece: ArtObject) => {
    setFocusedPiece(newPiece);
  };

  const contextValue = React.useMemo(
    () => ({
      lastSearchString,
      lastSearchParam,
      exhibtionContent,
      focusedPiece,
      updateFocusedPiece,
      updateSearch,
      updateExhibition,
    }),
    [
      lastSearchString,
      lastSearchParam,
      exhibtionContent,
      focusedPiece,
      updateFocusedPiece,
      updateSearch,
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

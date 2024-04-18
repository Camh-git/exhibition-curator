import React, { useState, useContext, useRef } from "react";
import { curatorContext } from "../Interfaces/AppContext";
import { ExhibitionPiece } from "./exhibition_piece";
import SearchBar from "./search_bar";
import "../styles/my_exhibition.css";
import { ExhibitInfo } from "./Exhibit_info";

const Exhibition: React.FC = () => {
  const { exhibtionContent, focusedPiece } = useContext(curatorContext);
  const [ShowInfo, setShowInfo] = useState(false);
  try {
    console.log("First entry: " + exhibtionContent[0].title);
  } catch {
    console.log("no context");
  }
  const InfoFocusRef = useRef<HTMLDivElement>(null);

  const DisplayInfo = (callerTitle = "NA") => {
    //Show the "more info" component, close if it's already open and showing the caller's art piece
    if (callerTitle === focusedPiece.title && ShowInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
      if (InfoFocusRef.current) {
        InfoFocusRef.current.focus();
      }
    }
  };
  const HideInfo = () => {
    setShowInfo(false);
  };

  return (
    <div>
      <h2>My exhibition</h2>
      <h4>Welcome to your own private art exhibtion</h4>
      <p>number of exhibits: {exhibtionContent.length}</p>
      {ShowInfo && (
        <div ref={InfoFocusRef} tabIndex={-1}>
          <ExhibitInfo ArtWork={focusedPiece} toggleInfo={HideInfo} />
        </div>
      )}

      <ul className="Exhibition_obj_container">
        {exhibtionContent.map((Entry) => (
          <ExhibitionPiece
            ArtWork={Entry}
            ShowInfo={DisplayInfo}
            key={exhibtionContent.indexOf(Entry)}
          />
        ))}
      </ul>
      <h3 className="Search_bar_header">
        Want more exhibits? search for some here:
      </h3>
      <SearchBar />
    </div>
  );
};

export default Exhibition;

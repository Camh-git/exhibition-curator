import React, { useState, useContext, useEffect } from "react";
import { curatorContext } from "../Interfaces/AppContext";
import { ExhibitionPiece } from "./exhibition_piece";

const Exhibition: React.FC = () => {
  const { exhibtionContent } = useContext(curatorContext);
  return (
    <div>
      <h2>My exhibition</h2>
      <p>number of exhibits: {exhibtionContent.length}</p>

      <ul className="Search_obj_container">
        {exhibtionContent.map((object) => (
          <ExhibitionPiece
            ArtWork={object}
            key={exhibtionContent.indexOf(object)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Exhibition;

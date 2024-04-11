import React, { useState, useContext, useEffect } from "react";
import { curatorContext } from "../Interfaces/AppContext";
import { ExhibitionPiece } from "./exhibition_piece";
import "../styles/my_exhibition.css";
import { ArtObject } from "../Interfaces/ArtObject";
import test_thumb from "../assets/images/Monitor-404.svg";

const Exhibition: React.FC = () => {
  const { exhibtionContent } = useContext(curatorContext);
  //TODO: placeholder data for css testing, delete when done
  const default_data: ArtObject = {
    id: "99999",
    title: "This is a test",
    artist: "test author",
    date: "1970",
    location: "This PC",
    collection: "Default",
    images: [test_thumb],
    onDisplay: false,
  };
  return (
    <div>
      <h2>My exhibition</h2>
      <h4>Welcome to your own private art exhibtion</h4>
      <p>number of exhibits: {exhibtionContent.length}</p>

      <ul className="Exhibition_obj_container">
        <ExhibitionPiece ArtWork={default_data} />
        <ExhibitionPiece ArtWork={default_data} />
        <ExhibitionPiece ArtWork={default_data} />

        {exhibtionContent.map((Entry) => (
          <ExhibitionPiece
            ArtWork={Entry}
            key={exhibtionContent.indexOf(Entry)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Exhibition;

import "./App.css";
import { Router } from "../router/router";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetch_VAM_API } from "../Functions/Fetch_vam_api";
import { ArtObject } from "../Interfaces/ArtObject";
function App() {
  const [artPieces, setArtPieces] = useState<ArtObject[]>([]);

  useEffect(() => {
    const VAMdata = async () => {
      setArtPieces(await fetch_VAM_API());
    };
    VAMdata();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
/*
  <ul>
        {artPieces.map((object) => (
          <li key={object.id}>
            <h2>{object.title}</h2>
            <p>Artist: {object.artist}</p>
            <p>Date: {object.date}</p>
          </li>
        ))}
      </ul>
*/
export default App;

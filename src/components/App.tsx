import "./App.css";
import { Router } from "../router/router";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetch_VAM_API } from "../Functions/Fetch_vam_api";
import { fetch_MET_API } from "../Functions/Fetch_met_api";
import { ArtObject } from "../Interfaces/ArtObject";
import SearchResultsPage from "./search_results_page";
function App() {
  const [artPieces, setArtPieces] = useState<ArtObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const VAMdata = async () => {
      setArtPieces(await fetch_MET_API());
      setLoading(false);
    };
    VAMdata();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResultsPage ArtObjects={artPieces}></SearchResultsPage>
      )}
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

import "./App.css";
import { Router } from "../router/router";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetch_MET_API } from "../Functions/Fetch_met_api";
import { ArtObject } from "../Interfaces/ArtObject";
import SearchResultsPage from "./search_results_page";
import { Run_search } from "../Functions/Run_search";
function App() {
  const [artPieces, setArtPieces] = useState<ArtObject[]>([]);
  const [loading, setLoading] = useState(true);
  document.title = "Exhibition curator";

  useEffect(() => {
    const VAMdata = async () => {
      setArtPieces(await fetch_MET_API("england"));
      setLoading(false);
    };
    VAMdata();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Run_search searchString="london"></Run_search>
    </div>
  );
}
export default App;

/*

 {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResultsPage ArtObjects={artPieces}></SearchResultsPage>
      )}
*/

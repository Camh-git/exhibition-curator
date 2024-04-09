import "./App.css";
import { Router } from "../router/router";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, createContext, useContext } from "react";
import { fetch_MET_API } from "../Functions/Fetch_met_api";
import { ArtObject } from "../Interfaces/ArtObject";
import {
  curatorContext,
  CuratorContextProvider,
} from "../Interfaces/AppContext";

function App() {
  document.title = "Exhibition curator";
  const [appContext, setAppContext] = useState(curatorContext);
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <CuratorContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CuratorContextProvider>
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

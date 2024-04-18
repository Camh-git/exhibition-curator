import "./App.css";
import { Router } from "../router/router";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import {
  curatorContext,
  CuratorContextProvider,
} from "../Interfaces/AppContext";

function App() {
  document.title = "Exhibition curator";
  const [appContext, setAppContext] = useState(curatorContext);

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

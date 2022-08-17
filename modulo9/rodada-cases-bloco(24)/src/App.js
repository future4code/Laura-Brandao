import * as React from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalState } from "./globalState/GlobalState";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;

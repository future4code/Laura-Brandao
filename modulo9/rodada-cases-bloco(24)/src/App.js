import * as React from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalState } from "./globalState/GlobalState";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <GlobalState>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;

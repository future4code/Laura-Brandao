import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const data = {};

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path={"/"} element={<MainPage />} />
    </Routes>
  );
}

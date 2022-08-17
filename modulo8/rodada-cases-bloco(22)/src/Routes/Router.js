import React from "react";
import { Routes, Route } from "react-router-dom";
import CardDetailsPage from "../Pages/CardDetailsPage";
import HomePage from "../Pages/HomePage";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/card/:name" element={<CardDetailsPage/>}/>
        </Routes>
    )
}

export default Router
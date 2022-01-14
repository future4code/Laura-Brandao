import React, { useState } from "react";
import styled from "styled-components";
import MainCard from "./Components/MainCard/MainCard";
import ListCard from "./Components/ListCard/ListCard";
import Header from "./Components/Header/Header";
import index from "./index.css";
import axios from "axios";

const Container = styled.div`
  background-color: #cccccc;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
    const [currentPage, setCurrentPage] = useState("mainCard")

    const renderCurrentPage = () => {
        if(currentPage === "mainCard"){
            return <MainCard />
        } else if (currentPage === "listCard"){
            return <ListCard />
        }
    }

    const clearMatches = () => {
        axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-lanna-joy/clear")
        .then((res) =>{
        })
        .catch((err) =>{
        })
    }

    const changePage = (currentPage) => {
        setCurrentPage(currentPage)
    }

    const getIsMainCard = () => {
        return currentPage === "mainCard"
    }

  return (
    <Container>
      <Header changePage={changePage} getIsMainCard={getIsMainCard}/>
        {renderCurrentPage()}
      <button onClick={() => clearMatches()}>Limpar swipes e matches</button>
    </Container>
  );
};

export default App;

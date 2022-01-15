import React, { useState } from "react";
import styled from "styled-components";
import MainCard from "./Components/MainCard/MainCard";
import ListCard from "./Components/ListCard/ListCard";
import Header from "./Components/Header/Header";
import index from "./index.css";
import axios from "axios";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right top, #76b9b3,#95b1ae, #9dadd6, #a5abbd);
  width: 100vw;
  height: 100vh; ;
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("mainCard");

  const renderCurrentPage = () => {
    if (currentPage === "mainCard") {
      return <MainCard />;
    } else if (currentPage === "listCard") {
      return <ListCard />;
    }
  };

  const clearMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-lanna-joy/clear"
      )
      .then((res) => {
        window.alert("A lista de matches foi resetada!");
      })
      .catch((err) => {});
  };

  const changePage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const getIsMainCard = () => {
    return currentPage === "mainCard";
  };

  return (
    <Container>
      <Header changePage={changePage} getIsMainCard={getIsMainCard} />
      {renderCurrentPage()}
      <Button onClick={() => clearMatches()} variant="contained" color="primary">
        Limpar swipes e matches
      </Button>
    </Container>
  );
};

export default App;

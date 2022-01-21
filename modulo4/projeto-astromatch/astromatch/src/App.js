import React, { useState } from "react";
import styled from "styled-components";
import MainCard from "./Components/MainCard/MainCard";
import ListCard from "./Components/ListCard/ListCard";
import Header from "./Components/Header/Header";
import index from "./index.css";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #e2cdf6, #ddccf7, #d9caf7, #d3c9f8, #cec8f8, #c6cdfc, #bfd2fe, #b9d6ff, #b3e0ff, #b2e9ff, #b6f2ff, #bff9fb);
  height: 100vh
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
    </Container>
  );
};

export default App;

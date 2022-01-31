import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  width: 80%;
  padding: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  border-radius: 5px;
  color: white;
  background-color: #948e99;
   :hover{
    background-color: #51425f;
   }
`;

function HomePage() {

  const history = useHistory();

  const goToListTrip = () => {
    history.push("/trips/list");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <MainContainer>
      <Container>
        <h1>LabeX</h1>
        <ButtonContainer>
          <Button onClick={goToListTrip}>Ver viagens</Button>
          <Button onClick={goToLogin}>Área do Admin</Button>
        </ButtonContainer>
      </Container>
    </MainContainer>
  );
}

export default HomePage;

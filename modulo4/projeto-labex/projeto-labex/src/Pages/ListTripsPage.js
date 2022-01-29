import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../Utils/Constants";

const CardTrip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  width: 50vw;
  height: 30vh;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  text-align: center;
`;

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

function ListTripsPage() {
  const [listTrips, setListTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        setListTrips(res.data.trips);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const listTripsMapped = listTrips.map((trip) => {
    return (
      <CardTrip key={trip.id}>
        <p>
          <strong>Nome:</strong> {trip.name}
        </p>
        <p>
          <strong>Descrição:</strong> {trip.description}
        </p>
        <p>
          <strong>Planeta:</strong> {trip.planet}
        </p>
        <p>
          <strong>Duração em dias:</strong> {trip.durationInDays}
        </p>
        <p>
          <strong>Data da viagem:</strong> {trip.date}
        </p>
      </CardTrip>
    );
  });

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };
  const goToApplication = () => {
    history.push("/trips/application/");
  };

  return (
    <MainContainer>
      <Container>
        <ButtonContainer>
          <button onClick={goToHome}>Voltar</button>
          <button onClick={goToApplication}>Inscrever</button>
        </ButtonContainer>
        <h2>Lista de viagens</h2>
        {listTrips.length === 0 ? <p>Carregando...</p> : listTripsMapped}
      </Container>
    </MainContainer>
  );
}

export default ListTripsPage;

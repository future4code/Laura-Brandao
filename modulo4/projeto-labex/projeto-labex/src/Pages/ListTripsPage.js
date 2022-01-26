import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CardTrip = styled.div`
  width: 450px;
  box-sizing: border-box;
  border: 1px solid black;
`

function ListTripsPage() {
  const [listTrips, setListTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/laura-lanna-joy/trips"
      )
      .then((res) => {
        setListTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listTripsMapped = listTrips.map((trip) => {
    return (
      <CardTrip key={trip.id}>
        <p><strong>Nome:</strong> {trip.name}</p>
        <p><strong>Descrição:</strong> {trip.description}</p>
        <p><strong>Planeta:</strong> {trip.planet}</p>
        <p><strong>Duração em dias:</strong> {trip.durationInDays}</p>
        <p><strong>Data da viagem:</strong> {trip.date}</p>
      </CardTrip>
    );
  });

  return (
    <div>
      <button>Voltar</button>
      <button>Inscrever</button>
      <h2>Lista de viagens</h2>
      {listTripsMapped}
    </div>
  );
}

export default ListTripsPage;

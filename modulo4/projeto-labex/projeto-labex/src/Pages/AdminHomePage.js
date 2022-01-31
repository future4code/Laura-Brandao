import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { BASE_URL, auth } from "../Utils/Constants";
import { clearToken } from "../Utils/localStorage";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
  text-align: center;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 15px;
  border: 1px solid;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 5px;
  height: 10vh;
  width: 40vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 60px;
  height: 40px;
  margin: 2px;
  border-radius: 5px;
  color: white;
  background-color: #948e99;
   :hover{
    background-color: #51425f;
   }
`;

function AdminHomePage() {
  useProtectedPage();

  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  const goToCreateTrip = () => {
    history.push("/admin/trips/create");
  };

  const logOut = () => {
    clearToken();
    history.push("/");
  };

  const goToTripsDetails = (id) => {
    history.push(`/admin/trips/${id}`);
  };

  const [listTrips, setListTrips] = useState([]);

  useEffect(() => {
    getTripsList();
  }, []);

  const getTripsList = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => setListTrips(res.data.trips))
      .catch((err) => alert(err));
  };

  const deleteTrip = (id, name) => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, auth)
      .then((res) => {
        console.log(res.data);
        getTripsList();
        alert(`${name} foi apagada com sucesso!`);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const tripListRender = listTrips.map((trip) => {
    return (
      <CardContainer key={trip.id}>
        <p> Destino: {trip.name}</p>
        <ButtonContainer>
          <Button onClick={() => goToTripsDetails(trip.id)}>Detalhes</Button>
          <Button onClick={() => deleteTrip(trip.id, trip.name)}>Delete</Button>
        </ButtonContainer>
      </CardContainer>
    );
  });

  return (
    <MainContainer>
      <Container>
        <h1>Painel Administrativo</h1>
        {tripListRender}
        <ButtonContainer>
          <Button onClick={goHome}>Voltar</Button>
          <Button onClick={goToCreateTrip}>Criar Viagem</Button>
          <Button onClick={logOut}>Logout</Button>
        </ButtonContainer>
      </Container>
    </MainContainer>
  );
}

export default AdminHomePage;

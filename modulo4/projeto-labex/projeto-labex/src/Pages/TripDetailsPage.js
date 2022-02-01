import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../Utils/Constants";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { auth } from "../Utils/Constants";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  text-align: center;
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

const CardTrip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 40vw;
  height: 30vh;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CardTripCandidates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 30%;
  height: 35%;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 20px 0 10px 0;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  margin: 2px;
  border-radius: 5px;
  color: white;
  background-color: #948e99;
   :hover{
    background-color: #51425f;
   }
`;

function TripsDetailsPage() {
  useProtectedPage();

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const { id } = useParams();

  const [trips, setTrips] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [chooseCandidates, setChooseCandidates] = useState();

  useEffect(() => {
    getTripsDetail(id);
  }, []);

  const getTripsDetail = (id) => {
    axios
      .get(`${BASE_URL}/trip/${id}`, auth)
      .then((res) => {
        setTrips(res.data.trip);
        setCandidates(res.data.trip.candidates);
      })
      .catch((err) => alert(err));
  };

  const decideCandidate = (candidatesId, approval) => {
    const body = {
      approve: approval,
    };
    axios
      .put(
        `${BASE_URL}/trips/${id}/candidates/${candidatesId}/decide`,
        body,
        auth
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const candidatesMapped = candidates.map((candidate) => {
    const candidatesId = candidate.id;

    return (
      <CardTripCandidates key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>País: {candidate.country}</p>
        <p>Idade: {candidate.age}</p>
        <p>Profissão: {candidate.profession}</p>
        <p>Justificativa: {candidate.applicationText}</p>
        <ButtonContainer>
          <Button onClick={() => decideCandidate(true)}>Aprovar</Button>
          <Button onClick={() => decideCandidate(false)}>Reprovar</Button>
        </ButtonContainer>
      </CardTripCandidates>
    );
  });

  return (
    <MainContainer>
      <Container>
        <h1>Detalhes da viagem</h1>
        <CardTrip>
          <p>Nome: {trips.name}</p>
          <p>Descrição: {trips.description}</p>
          <p>Planeta: {trips.planet}</p>
          <p>Duração em dias: {trips.durationInDays}</p>
          <p>Data: {trips.date}</p>
        </CardTrip>
        <h3>Candidatos Pendentes</h3>
        {candidatesMapped}
        <h3>Candidatos Aprovados</h3>

        <Button onClick={goBack}>Voltar</Button>
      </Container>
    </MainContainer>
  );
}

export default TripsDetailsPage;

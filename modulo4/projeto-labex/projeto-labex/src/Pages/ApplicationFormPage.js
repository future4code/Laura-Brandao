import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../Utils/Constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4vh;
  form {
    display: flex;
    flex-direction: column;
    width: 60vw;
    select {
      height: 5vh;
      margin: 5px;
      border-radius: 10px;
    }
    input {
      height: 5vh;
      margin: 5px;
      border-radius: 10px;
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 20px;
  height: 100vh;
  width: 100vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 20px 0 10px 0;
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

function ApplicationFormPage() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [candInput, setCandInput] = useState("");
  const [profInput, setProfInput] = useState("");
  const [listTrips, setListTrips] = useState([]);
  const [index, setIndex] = useState(0);

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };
  const handleAgeInput = (e) => {
    setAgeInput(e.target.value);
  };
  const handleCandInput = (e) => {
    setCandInput(e.target.value);
  };
  const handleProfInput = (e) => {
    setProfInput(e.target.value);
  };

  const resetInput = () => {
    setNameInput("");
    setAgeInput("");
    setCandInput("");
    setProfInput("");
  };

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

  // TODO  usar api do governo para pegar todos os paises, fazer map e passar os dados para o body da requisição
  const applyTrip = (id) => {
    const body = {
      name: nameInput,
      age: ageInput,
      applicationText: candInput,
      profession: profInput,
      country: "Brasil",
    };

    axios
      .post(`${BASE_URL}/trips/${id}/apply`, body)
      .then((res) => {
        console.log(res.data);
        resetInput();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSelect = (e) => {
    setIndex(e.target.value);
  };

  const selectTrips = () => (
    <select onChange={handleSelect}>
      {listTrips.map((trip, index) => (
        <option value={index}>{trip.name}</option>
      ))}
    </select>
  );

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainContainer>
      <h1>Inscreva-se para uma viagem</h1>
      <Container>
        <form>
          {selectTrips()}
          <input
            type="text"
            placeholder="Nome"
            value={nameInput}
            onChange={handleNameInput}
          />
          <input
            type="text"
            placeholder="Idade"
            value={ageInput}
            onChange={handleAgeInput}
          />
          <input
            type="text"
            placeholder="Texto de candidatura"
            value={candInput}
            onChange={handleCandInput}
          />
          <input
            type="text"
            placeholder="Profissão"
            value={profInput}
            onChange={handleProfInput}
          />
          <select>
            <option>Escolha um país</option>
            <option>Brasil</option>
          </select>
        </form>
        <ButtonContainer>
          <Button onClick={goBack}>Voltar</Button>
          <Button onClick={() => applyTrip(listTrips[index].id)}>Enviar</Button>
        </ButtonContainer>
      </Container>
    </MainContainer>
  );
}

export default ApplicationFormPage;

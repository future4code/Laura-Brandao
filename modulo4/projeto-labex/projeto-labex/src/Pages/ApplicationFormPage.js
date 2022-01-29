import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL } from "../Utils/Constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.4); */
  color: white;
  font-weight: bold;
  /* border: 3px solid #f1f1f1; */
  padding: 20px;
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
        console.log(res.data.trips)
      })
      .catch((err) => {
        alert(err);
      });
  };

  // TODO  usar api do governo para pegar todos os paises, faz map e passar os dados para o body da requisição
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
        console.log(err);
      });
  };

  const handleSelect = (e) => {
    setIndex(e.target.value);
    console.log(e.target.value)
  };
  

  const selectTrips = () => 
    <select onChange={handleSelect}>
      {listTrips.map((trip, index) => (
        <option value={index}>{trip.name}</option>
      ))}
    </select>;
  

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <h1>Inscreva-se para uma viagem</h1>
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
      <div>
        <button onClick={goBack}>Voltar</button>
        <button onClick={() => applyTrip(listTrips[index].id)}>Enviar</button>
      </div>
    </Container>
  );
}

export default ApplicationFormPage;

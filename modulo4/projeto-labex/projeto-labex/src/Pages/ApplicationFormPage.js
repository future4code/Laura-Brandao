import axios from "axios";
import react from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
    setCandInput("")
    setProfInput("");

  }

  // TODO faltando id das viagens e value do country
  const applyTrip = () => {
    const body = {
      name: nameInput,
      age: ageInput,
      applicationText: candInput,
      profession: profInput,
      country: "Brasil", 
    };

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/laura-lanna-joy/trips/FCG50K7QshtgtjSKhOry/apply", body)
      .then((res) => {
        console.log(res.data)
        resetInput()
      })
      .catch((err) => {console.log(err)})
  };

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  return (
    <Container>
      <h1>Inscreva-se para uma viagem</h1>
      <select>
        <option>Escolha uma viagem</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
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
      </select>
      <div>
        <button onClick={goBack}>Voltar</button>
        <button onClick={() => applyTrip()}>Enviar</button>
      </div>
    </Container>
  );
}

export default ApplicationFormPage;

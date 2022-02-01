import axios from "axios";
import react from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { auth, BASE_URL } from "../Utils/Constants";

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

function CreateTripPage() {
  useProtectedPage();

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (event) => {
    event.preventDefault();
    cleanFields();
    axios
      .post(`${BASE_URL}/trips`, form , auth)
      .then((res) => {
        console.log(res.data);
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const planets = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Plutão",
    "Éris",
    "Ceres",
    "Haumea",
    "Makemake",
  ];
  // const selectPlanets = () => {
  //   <select onChange={onChange} value={form.planet}>
  //     {planets.map((value, index) => (
  //       <option key={index} value={index}>
  //         {value}
  //       </option>
  //     ))}
  //   </select>;
  // };
  return (
    <MainContainer>
      <h1>Criar Viagem</h1>
      <Container>
        <form onSubmit={createTrip}>
        {/* {selectPlanets()} */}
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          m="3"
          required
          pattern={"^.{4,}"}
          title={"Deve ter no mínimo 4 letras"}
          color="white"
        />
        <select
          id="planet"
          placeholder="Planeta de destino"
          name="planet"
          value={form.planet}
          onChange={onChange}
        >
          <option value="mercury">Mercúrio</option>
          <option value="venus">Vênus</option>
          <option value="earth">Terra</option>
          <option value="mars">Marte</option>
          <option value="jupiter">Júpiter</option>
          <option value="saturn">Saturno</option>
          <option value="uranus">Urano</option>
          <option value="neptune">Netuno</option>
          <option value="pluto">Plutão</option>
        </select>
        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="Data"
          m="3"
          required
          type={"date"}
          color="white"
        />
        <input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição da viagem"
          m="3"
          required
          pattern={"^.{10,}"}
          title={"Deve conter no mínimo 10 letras"}
          color="white"
        />
        <input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração em dias"
          m="3"
          required
          type={"number"}
          color="white"
          min={"30"}
        />
      </form>
      <ButtonContainer>
        <Button onClick={goBack}>Voltar</Button>
        <Button type="submit" onClick={createTrip}>
          Enviar
        </Button>
      </ButtonContainer>
      </Container>
      
    </MainContainer>
  );
}

export default CreateTripPage;

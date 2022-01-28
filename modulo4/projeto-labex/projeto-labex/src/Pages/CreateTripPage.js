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
  color: white;
  font-weight: bold;
  padding: 20px;
`;

function CreateTripPage() {
    
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }


  return (
    <Container>
      <h1>Criar Viagem</h1>
      <input type="text" placeholder="Nome" />
      <select>
        <option>Escolha o seu destino</option>
        <option>Mercúrio</option>
        <option>Vênus</option>
        <option>Terra</option>
        <option>Lua</option>
        <option>Marte</option>
        <option>Júpiter</option>
        <option>Saturno</option>
        <option>Titan</option>
        <option>Urano</option>
        <option>Netuno</option>
        <option>Plutão</option>
        <option>Caronte</option>
        <option>Ao infinito e além</option>
      </select>

      <input type="date" placeholder="Idade" />
      <input type="text" placeholder="Descrição" />
      <input type="number" placeholder="Duração em dias" />
      <select>
        <option>Escolha um país</option>
      </select>
      <div>
        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      </div>
    </Container>
  );
}

export default CreateTripPage;

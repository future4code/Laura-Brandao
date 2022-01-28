import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const ErrorPage = () => {

  const history = useHistory()

  const goToHome = () => {
    history.push("/")
  }

  return (
    <Container>
      <iframe
        src="https://giphy.com/embed/14uQ3cOFteDaU"
        width="480"
        height="360"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
        title="Gif de Erro"
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/404-14uQ3cOFteDaU">via GIPHY</a>
      </p>
      <button onClick={goToHome}>Voltar para Home</button>
    </Container>
  );
};

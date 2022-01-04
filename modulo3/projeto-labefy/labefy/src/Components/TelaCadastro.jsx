import React from "react";
import styled from "styled-components";
import axios from "axios";
import background from "../img/background.jpg";

const Container = styled.div`
  display: flex;
  width: 99vw;
  height: 97vh;
  border-radius: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8b898a;
  justify-content: center;
  width: 70%;
  height: 70%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const Titulo = styled.h1`
  color: #ffe488;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

const Titulo2 = styled.label`
  color: #343a40;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  margin: 0 0 5px;
  text-align: center;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 210px;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: #fff;
`;

const Button = styled.button`
  margin: 5px;
  color: #595758;
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: "Lucida Console", monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: ease-out 0.4s;
  border-radius: 10px;

`;

const axiosConfig = {
  headers: {
    Authorization: "laura-lanna-joy",
  },
};

export default class TelaCadastro extends React.Component {
  state = {
    playlist: "",
  };

  // função de input controlado, juntamente com o value e on change lá na tag input
  handlePlaylist = (event) => {
    this.setState({ playlist: event.target.value });
  };

  // função que vai criar o cadastro usando api
  criarCadastro = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.playlist,
    };
    axios
      .post(URL, body, axiosConfig)
      .then((res) => {
        alert("Playlist criada com sucesso! ;)");
        this.setState({ playlist: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <Container
        style={{
          background: `url(${background})`,
        }}
      >
        <Main>
          <Titulo>Bem-vindos ao Labefy!</Titulo>
          <Titulo2>Cadastre sua playlist:</Titulo2>
          <Input
            placeholder="Insira o nome da sua playlist"
            type="text"
            value={this.state.playlist}
            onChange={this.handlePlaylist}
          />
          <div>
            <Button onClick={this.criarCadastro}>Criar playlist</Button>
            <Button onClick={this.props.irParaLista}>Ir para playlists</Button>
          </div>
        </Main>
      </Container>
    );
  }
}

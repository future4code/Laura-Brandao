import React from "react";
import styled from "styled-components";
import axios from "axios";
import background from "../img/background.jpg";

const CardPlaylist = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  width: 20vw;
  text-align: center;
  background-color: #b8b8b8;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  border-radius: 10px;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

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
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const Titulo = styled.h1`
  color: #ffe488;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

const Button = styled.button`
  margin: 5px;
  color: #595758;
  border-radius: 0px;
  padding: 12px 30px;
  display: inline-block;
  font-family: "Lucida Console", monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: ease-out 0.4s;
  border-radius: 10px;
`;

const Button1 = styled.button`
  margin: 5px;
  color: #595758;
  border-radius: 0px;
  padding: 5px 8px;
  display: inline-block;
  font-family: "Lucida Console", monospace;
  font-size: 12px;
  cursor: pointer;
  transition: ease-out 0.4s;
`;


const axiosConfig = {
  headers: {
    Authorization: "laura-lanna-joy",
  },
};

export default class TelaPlaylist extends React.Component {
  // estado criado para guardar as playlists
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.loadPlaylists();
  }

  loadPlaylists = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(URL, axiosConfig)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert("Ops! Ocorreu um erro!");
      });
  };

  deletarPlaylist = (id) => {
    // aqui, foi adicionado ${id}, para receber o id das playlists a serem deletadas
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(URL, axiosConfig)
      .then((res) => {
        alert("Playlist excluída com sucesso!");
        this.loadPlaylists();
        // chamada a função para a lista ficar atualizada após exclusão de uma playlist
      })
      .catch((err) => {
        alert("Ocorreu um erro! Tente novamente!");
      });
  };

  // função que faz a primeira letra da palavra ficar maiúscula
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const listaPlaylists = this.state.playlists.map((playlist) => {
      return (
        <CardPlaylist key={playlist.id}>
          {this.capitalizeFirstLetter(playlist.name)}
          {/* quando se passa um parâmetro na função, o onClick deve ficar da forma igual abaixo */}

          <div>
            <Button1 onClick={() => this.deletarPlaylist(playlist.id)}>
              Excluir
            </Button1>
            <Button1
              onClick={() =>
                this.props.irParaDescricao(playlist.id, playlist.name)
              }
            >
              Detalhes
            </Button1>
          </div>
        </CardPlaylist>
      );
    });

    return (
      <Container
        style={{
          background: `url(${background})`,
        }}
      >
        <Main>
          <Titulo>Playlists</Titulo>
          {listaPlaylists}
          <Button onClick={this.props.irParaCadastro}>
            Voltar para tela inicial
          </Button>
        </Main>
      </Container>
    );
  }
}

import React from "react";
import styled from "styled-components";
import axios from "axios";
import background from "../img/background.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8b898a;
  justify-content: center;
  width: 20%;
  height: 100%%;
  border: 2px solid #6c757d;
  border-radius: 10px 0 0 10px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding-left: 300px;

`;

const Titulo = styled.label`
  color: #343a40;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  margin: 5px 5px 0 5px;
  text-align: center;
`;

const Titulo2 = styled.label`
  color: #343a40;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  margin: 5px 0 5px;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 5px;
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 250px;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: #fff;
`;

const Button = styled.button`
  margin: 5px;
  color: #595758;
  padding: 5px 8px;
  display: inline-block;
  font-family: "Lucida Console", monospace;
  font-size: 12px;
  cursor: pointer;
  transition: ease-out 0.4s;
  border-radius: 10px;
`;

const Button2 = styled.button`
  margin: 5px;
  color: #595758;
  padding: 5px 8px;
  width: 100px;
  font-family: "Lucida Console", monospace;
  font-size: 12px;
  cursor: pointer;
  transition: ease-out 0.4s;
  border-radius: 10px;
`;

const axiosConfig = {
  headers: {
    Authorization: "laura-lanna-joy",
  },
};

export default class TelaDescricaoPlaylist extends React.Component {
  state = {
    musica: "",
    artista: "",
    url: "",
    listaDeMusicas: [],
    quantidade: "",
  };

  componentDidMount() {
    this.getPlaylist(this.props.pegarPlaylistId());
  }

  handleMusica = (e) => {
    this.setState({ musica: e.target.value });
  };
  handleArtista = (e) => {
    this.setState({ artista: e.target.value });
  };
  handleUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  getPlaylist = async (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    try {
      const res = await axios.get(URL, axiosConfig);
      console.log(res.data.result.tracks);
      this.setState({
        listaDeMusicas: res.data.result.tracks,
        quantidade: res.data.result.quantity,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  adicionarMusica = async (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.musica,
      artist: this.state.artista,
      url: this.state.url,
    };
    try {
      await axios.post(URL, body, axiosConfig);
      alert("Música adicionada com sucesso! :)");
      // setado o estado para "" para que os inputs fiquem vazios, após a música ser adicionada
      this.setState({ musica: "", artista: "", url: "" });
      this.getPlaylist(id);
    } catch (error) {
      alert("Erro ao adicionar música!");
    }
  };

  deletarMusica = async (id, musicaId) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${musicaId}`;
    try {
      await axios.delete(URL, axiosConfig);
      alert("Música deletada com sucesso! :)");
      this.getPlaylist(id);
    } catch (error) {
      alert("Erro ao deletar música!");
    }
  };

  // função que faz a primeira letra da palavra ficar maiúscula
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const listaDeMusicasMapeada = this.state.listaDeMusicas.map((musica) => {
      return (
        <List key={musica.id}>
          <Titulo2>Nome: {this.capitalizeFirstLetter(musica.name)}</Titulo2>
          <Titulo2>Artista/Banda: {this.capitalizeFirstLetter(musica.artist)}</Titulo2>
          <div>
            <iframe
              width="560"
              height="315"
              src={musica.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Button2
            onClick={() =>
              this.deletarMusica(this.props.pegarPlaylistId(), musica.id)
            }
          >
            Excluir
          </Button2>
        </List>
      );
    });

    return (
      <Container
        style={{
          background: `url(${background})`,
        }}
      >
        <Main>
          <Titulo2>Música:</Titulo2>
          <Input
            placeholder="Digite o nome da música"
            value={this.state.musica}
            onChange={this.handleMusica}
          />
          <Titulo2>Artista ou Banda:</Titulo2>
          <Input
            placeholder="Digite o nome do artista ou banda"
            value={this.state.artista}
            onChange={this.handleArtista}
          />
          <Titulo2>URL:</Titulo2>
          <Input
            placeholder="Insira a url da música"
            value={this.state.url}
            onChange={this.handleUrl}
          />
          <Button
            onClick={() => this.adicionarMusica(this.props.pegarPlaylistId())}
          >
            Adicionar música
          </Button>
          <Button onClick={this.props.irParaCadastro}>
            Voltar para tela inicial
          </Button>
          <Button onClick={this.props.irParaLista}>
            Voltar para playlists
          </Button>
        </Main>
        <div>
          <Titulo>
            <strong>Playlist: </strong>{" "}
            {this.capitalizeFirstLetter(this.props.pegarPlaylistName())}
          </Titulo>
          <div>{listaDeMusicasMapeada}</div>
          <Titulo>{this.state.quantidade} músicas</Titulo>
        </div>
      </Container>
    );
  }
}

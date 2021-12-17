import React from "react";
import styled from "styled-components";
import axios from "axios";

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
      this.setState({ listaDeMusicas: res.data.result.tracks });
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
      this.getPlaylist(id)
    } catch (error) {
      alert("Erro ao deletar música!");
    }
  };

  render() {
    const listaDeMusicasMapeada = this.state.listaDeMusicas.map((musica) => {
      return (
        <div key={musica.id}>
          <div></div>
          <div>{musica.name}</div>
          <div>{musica.artist}</div>
          <div>{musica.url}</div>
          <button onClick={() => this.deletarMusica(this.props.pegarPlaylistId(), musica.id)}>X</button>
        </div>
      );
    });

    return (
      <div>
        <input
          placeholder="Digite o nome da música"
          value={this.state.musica}
          onChange={this.handleMusica}
        />
        <input
          placeholder="Digite o nome do artista ou banda"
          value={this.state.artista}
          onChange={this.handleArtista}
        />
        <input
          placeholder="Insira a url da música"
          value={this.state.url}
          onChange={this.handleUrl}
        />
        <button
          onClick={() => this.adicionarMusica(this.props.pegarPlaylistId())}
        >
          Adicionar música
        </button>

        {listaDeMusicasMapeada}

        <hr />

        <button onClick={this.props.irParaCadastro}>
          Voltar para tela inicial
        </button>
        <button onClick={this.props.irParaLista}>Voltar para playlists</button>
      </div>
    );
  }
}

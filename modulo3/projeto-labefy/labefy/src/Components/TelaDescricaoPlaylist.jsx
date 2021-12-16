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
    playlist: [],
    listaDeMusicas: [],
  };
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
    try{
      const res = await axios.get(URL, axiosConfig);
      console.log(res.data.result.tracks)
      this.setState({ listaDeMusicas: res.data.result.tracks });
    }
    catch(error){
      console.log(error)
    }
  };

  adicionarMusica = async (id) => {
    console.log("adicionarMusica");
    console.log(id);
    console.log(this.state.listaDeMusicas);
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.musica,
      artist: this.state.artista,
      url: this.state.url,
    };
    try {
      await axios.post(URL, body, axiosConfig);
      alert("Música adicionada com sucesso! :)");
      this.setState({musica:"", artista:"", url:""})
      this.getPlaylist(id)
      
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  render() {
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
          onClick={() => this.adicionarMusica(this.props.pegarPlaylist())}>
          Adicionar música
        </button>
        <button onClick={this.props.irParaCadastro}>
          Voltar para tela inicial
        </button>
        <button onClick={this.props.irParaLista}>Voltar para playlists</button>
      </div>
    );
  }
}

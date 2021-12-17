import React from "react";
import styled from "styled-components";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "laura-lanna-joy",
  },
};

export default class TelaCadastro extends React.Component {
    state = {
        playlist: "",
    }

// função de input controlado, juntamente com o value e on change lá na tag input
    handlePlaylist = (event) => {
        this.setState({playlist: event.target.value})
    }

    // função que vai criar o cadastro usando api
    criarCadastro = () => {
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }
        axios.post(URL,body,axiosConfig)
        .then((res) =>{
            alert("Playlist criada com sucesso! ;)")
            this.setState({playlist: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

  render() {
    return (
      <div>
        <h2>Bem-vindos ao Labefy!</h2>
        <label>Cadastre sua playlist:</label>
        <input
          placeholder="Insira o nome da sua playlist"
          type="text"
          value={this.state.playlist}
          onChange={this.handlePlaylist}
        />
        <button onClick={this.criarCadastro}>Criar playlist</button>
        <button onClick={this.props.irParaLista}>Ir para playlists</button>
      </div>
    );
  }
}

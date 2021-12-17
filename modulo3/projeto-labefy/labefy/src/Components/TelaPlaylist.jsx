import React from "react";
import styled from "styled-components";
import axios from "axios";

const axiosConfig = {
    headers: {
      Authorization: "laura-lanna-joy",
    },
  };

const CardPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 20vw;
    text-align: center;

`

export default class TelaPlaylist extends React.Component{
    // estado criado para guardar as playlists
    state = {
        playlists: []
    }

    componentDidMount() {
        this.loadPlaylists()
    }

    loadPlaylists = () => {
        const URL =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(URL, axiosConfig)
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert("Ops! Ocorreu um erro!")
        })
    }

    deletarPlaylist = (id) => {
        // aqui, foi adicionado ${id}, para receber o id das playlists a serem deletadas
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(URL, axiosConfig)
        .then((res) => {
            alert("Playlist excluída com sucesso!")
            this.loadPlaylists()
            // chamada a função para a lista ficar atualizada após exclusão de uma playlist
        })
        .catch((err) =>{
            alert("Ocorreu um erro! Tente novamente!")
        })
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      

    render(){

        const listaPlaylists = this.state.playlists.map((playlist) => {
            return  (
                <CardPlaylist key={playlist.id}>
                    {this.capitalizeFirstLetter(playlist.name)}
                    {/* quando se passa um parâmetro na função, o onClick deve ficar da forma igual abaixo */}
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>Excluir</button>
                    <button onClick={() => this.props.irParaDescricao(playlist.id)}>+</button>
                </CardPlaylist>
            )
          })


        return (
            <div>
                {listaPlaylists}
                <button onClick={this.props.irParaCadastro}>Voltar para tela inicial</button>

            </div>
        )
    }

}

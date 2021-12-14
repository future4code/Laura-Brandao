import React from "react";
import styled from "styled-components";
import axios from "axios";

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
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        const URL =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(URL,{
            headers: {
                Authorization: "laura-lanna-joy"
            }
        })
        .then((res) => {
            console.log(res.data.result.list)
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert("Ops! Ocorreu um erro!")
        })
    }

    deletarPlaylist = (id) => {
        // aqui, foi adicionado ${id}, para receber o id das playlists a serem deletadas
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(URL,{
            headers: {
                Authorization: "laura-lanna-joy"
            }
        })
        .then((res) => {
            alert("Playlist excluída com sucesso!")
            this.pegarPlaylists()
            // chamada a função para a lista ficar atualizada após exclusão de uma playlist
        })
        .catch((err) =>{
            alert("Ocorreu um erro! Tente novamente!")
        })
    }

    render(){

        const listaPlaylists = this.state.playlists.map((playlist) => {
            return  (
                <CardPlaylist key={playlist.id}>
                    {playlist.name}
                    {/* quando se passa um parâmetro na função, o onClick deve ficar da forma igual abaixo */}
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>X</button>
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

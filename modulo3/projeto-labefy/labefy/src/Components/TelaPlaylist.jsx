import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class TelaPlaylist extends React.Component{

    pegarPlaylists = () => {
        const URL =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(URL,{
            headers: {
                Authorization: "laura-lanna-joy"
            }
        })
    }

    render(){
        return (
            <div>
                Playlists 
                <button onClick={this.props.irParaCadastro}>Voltar para tela inicial</button>

            </div>
        )
    }

}

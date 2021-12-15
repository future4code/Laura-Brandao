import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class TelaDescricaoPlaylist extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Voltar para tela inicial</button>
                <button onClick={this.props.irParaLista}>Voltar para playlists</button>
            </div>
        )
    }
}
import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaPlaylist from "./Components/TelaPlaylist";
import TelaDescricaoPlaylist from "./Components/TelaDescricaoPlaylist";

export default class App extends React.Component{

  state = {
    telaAtual: "cadastro",
    playlistId: ""
  }

  // função com renderização condicional usando curto circuito, que faz as telas mudarem
  escolheTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaPlaylist irParaCadastro={this.irParaCadastro} irParaDescricao={this.irParaDescricao}/>
      case "descricao":
        return <TelaDescricaoPlaylist irParaLista={this.irParaLista} irParaCadastro={this.irParaCadastro} pegarPlaylistId={this.pegarPlaylistId}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  // aqui terão funções para mudar de telas

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  pegarPlaylistId = () => {
    return this.state.playlistId
  }

  irParaDescricao = (id) => {
    console.log("irParaDescricao")
    console.log(id)
    this.setState({playlistId: id})
   this.setState({telaAtual: "descricao"})
  }


  render() {
    return (
    <div>
      {this.escolheTela()}
    </div>
    );
  }
}
;
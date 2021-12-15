import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaPlaylist from "./Components/TelaPlaylist";
import TelaDescricaoPlaylist from "./Components/TelaDescricaoPlaylist";

export default class App extends React.Component{

  state = {
    telaAtual: "cadastro"

  }

  // função com renderização condicional usando curto circuito, que faz as telas mudarem
  escolheTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaPlaylist irParaCadastro={this.irParaCadastro} irParaDescricao={this.irParaDescricao}/>
      case "descricao":
        return <TelaDescricaoPlaylist irParaLista={this.irParaLista} irParaCadastro={this.irParaCadastro} />
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

  irParaDescricao = () => {
    console.log("teste")
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
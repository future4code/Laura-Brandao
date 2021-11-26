import React from "react";
import "./App.css";
import Pagina1 from "./Components/Pagina1";
import Pagina2 from "./Components/Pagina2";
import Pagina3 from "./Components/Pagina3";
import PaginaFinal from "./Components/PaginaFinal";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Pagina1 />;
      case 2:
        return <Pagina2 />;
      case 3:
        return <Pagina3 />;
      case 4:
        return <PaginaFinal />;
      default:
        return <p>Página não encontrada</p>;
    }
  };

  renderizaBotao = () => {
    if (this.state.etapa < 4) {
      return <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>;
    }
  };

  render() {
    return (
      <Container>
        {this.renderizaEtapa()}
        {this.renderizaBotao()}
      </Container>
    );
  }
}

export default App;

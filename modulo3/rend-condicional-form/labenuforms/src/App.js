import React from 'react';
import './App.css';
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';
import Pagina3 from './Components/Pagina3';
import PaginaFinal from './Components/PaginaFinal';

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    
    switch(this.state.etapa){
      case 1:
        return <Pagina1 />;
      case 2:
        return <Pagina3 />;
      case 3:
        return <Pagina3 />;
      case 4:
        return <PaginaFinal />;
      default:
        return <Pagina1 />;
    }
  }

  render (){

    // irParaProximaEtapa = () =>{

    // }

    return (
      <div>
        <Pagina1 />
        <Pagina2 />
        <Pagina3 />
        <PaginaFinal />
        {this.renderizaEtapa()}
        <button>Próxima Etapa</button>
      </div>
    );
  }
}

export default App;

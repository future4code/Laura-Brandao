import React from 'react';
import './App.css';
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';
import Pagina3 from './Components/Pagina3';
import PaginaFinal from './Components/PaginaFinal';

class App extends React.Component {
  render (){
    return (
      <div>
        <Pagina1 />
        <Pagina2 />
        <Pagina3 />
        <PaginaFinal />
      </div>
    );
  }
}

export default App;

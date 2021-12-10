import React from "react";
import axios from "axios";

export default class Lists extends React.Component {

  state={
    condicional: "usuario",
    usuario: {}
  };

  componentDidMount(){
    
  }

  trocaPagina = () =>{
    if (this.state.condicional === "usuario"){
      this.setState({condicional: "outra"});
    } else{
      this.setState({condicional: "usuario"});
    }
  };

    render() {
      return (
        <div>
          
        </div>
      )
    }
  }
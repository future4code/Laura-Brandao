import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    usuario: [],
    valorInputUsuario: '',
    valorInputEmail: '',
    condicional: "usuario"
  };

  componentDidMount() {
    this.pegarUsuario();
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };
  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };

  pegarUsuario = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "laura-lanna-joy",
          },
        }
      )
      .then((response) => {
        this.setState({ usuario: response.data });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  criarUsuario = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.valorInputUsuario,
      email: this.state.valorInputEmail
    };

    const headers = {
      headers:{
        Authorization: "laura-lanna-joy"
      }
    };

    axios
      .post(URL, body, headers)
      .then((res) =>{
        alert("Sucesso, usuário criado!")
        this.pegarUsuario();
      })
      .catch((error) =>{
        alert(error.response.data)
      })
  };

  trocaPagina = () =>{
    if (this.state.condicional === "usuario"){
      this.setState({condicional: "outra"});
    } else{
      this.setState({condicional: "usuario"});
    }
  };
  
  render() {

    const listaUsuarios = this.state.usuario.map((user) => {
      return  <p key={user.id}>{user.name}</p>
    })

    return (
      <div>
        <div>
          <button onClick={this.trocaPagina}>Trocar Tela</button>
        </div>
        <hr />

        <div>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
        />
        </div>

        <div>
        <input
          placeholder="E-mail"
          type="text"
          value={this.state.valorInputEmail}
          onChange={this.onChangeInputEmail}
        />
        </div>

        <button onClick={this.criarUsuario}>Criar Usuário</button>

        <hr />

        {listaUsuarios}
      </div>
      
    );
  }
}

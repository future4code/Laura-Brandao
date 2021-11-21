import './App.css';
import React from 'react';
import styled from 'styled-components';
import Fundo from './componentes/img/fundowhats.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const MainContainer = styled.div`
  height: 100vh;
  width: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-items: center;
  
  box-sizing: border-box;
`

const Tela = styled.div`
  padding: 20px 20px 20px 20px;
  background-size: cover;
  height: 100vh;  
  /* O height delimita o tamanho da tela ao ponto de depois que é preenchida, as mensagens "vazam" pelo input e pela imagem de fundo */
`
const Campo = styled.div`
  display: flex;
  width: 100%;
`

const CampoUsuario = styled.input`
  box-sizing: border-box;
  width: 20%;
  padding: 5px;
  margin-left: 2px;
  border: medium none;
  border-radius: 5px;
  font-size: 14px;

`
const CampoMensagem = styled.input`
  box-sizing: border-box;
  width: 75%;
  padding: 8px;
  border: medium none;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 3px;
  font-size: 14px;

`
const Enviar = styled.button`
  box-sizing: border-box;
  border: medium none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`


class Whatslab extends React.Component {
  state = {
    appWhats: [
      {
        usuario: "Laura",
        mensagem: "Oie, tudo bem?"
      }     
    ],

    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  adicionaMensagem = () => {

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };

    const novoApp = [ ...this.state.appWhats, novaMensagem ];

    this.setState({ appWhats: novoApp , valorInputMensagem: "" });
    
    
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.adicionaMensagem()
    }
  }
  // O método acima faz com que ao apertar o enter, a função adicionaMensagem seja acionada.

  render() {

    const listaDeComponentes = this.state.appWhats.map((appWhat) => {
      return (
        <p>
          {appWhat.usuario}: {appWhat.mensagem}
        </p>
      );
    });

    return (
      <Container>
        <MainContainer>
          
          <Tela style={{backgroundImage: `url(${Fundo})`}} >{listaDeComponentes}</Tela>

          <Campo>
            <CampoUsuario
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />

            <CampoMensagem
              onKeyDown={this.handleKeyDown}
              // O método acima faz com quem quando uma tecla seja pressionada, o método handleKeyDown seja acionado
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Digite uma mensagem"}
            />

            <Enviar onClick={this.adicionaMensagem}>Adicionar</Enviar>
          </Campo>
          
        </MainContainer>
      </Container>
    );
  }
}

export default Whatslab;

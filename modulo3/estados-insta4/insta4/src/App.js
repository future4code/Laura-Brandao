import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  width: 21.5vw ;
  height: 5vh;
  margin-top: 5px;
  padding: 2px;
`
const Botao = styled.button`
  width: 12vw;
  height: 8vh;
  margin: 10px;
  border-radius: 10px;
  background-color: darkblue;
  color: white
`



class App extends React.Component {
  state={
    
    posts: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/40",
      fotoPost: "https://picsum.photos/200/150?random=1"
    },

    {
      nomeUsuario: "sartikov",
      fotoUsuario: 'https://picsum.photos/50/29',
      fotoPost: 'https://picsum.photos/200/150?random=2'
    },
    
    {
      nomeUsuario: "anna",
      fotoUsuario: 'https://picsum.photos/50/100',
      fotoPost: 'https://picsum.photos/200/150?random=3'
    }
  ],

  valorInputNome: "",
  valorInputFotoUser: "",
  valorInputFotoPost: ""
};

adicionarPost = () => {
  const novoPost = {
    nomeUsuario: this.state.valorInputNome,
    fotoUsuario: this.state.valorInputFotoUser,
    fotoPost: this.state.valorInputFotoPost
  };

  const novoPosts = [...this.state.posts, novoPost];
  this.setState({posts: novoPosts });
};

onChangeInputNome = (event) => {
  this.setState({ valorInputNome: event.target.value });
};

onChangeInputFotoUser = (event) => {
  this.setState({valorInputFotoUser: event.target.value });
};

onChangeInputFotoPost = (event) => {
  this.setState({valorInputFotoPost: event.target.value });
};

  render() {
    const listaDeComponentes = this.state.posts.map((posts) => {
      return <Post
      nomeUsuario={posts.nomeUsuario}
      fotoUsuario={posts.fotoUsuario}
      fotoPost={posts.fotoPost}
    />
    });
    return (
      <MainContainer>

        {listaDeComponentes}

        <Input 
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Insira seu nome"}
        />
        <Input 
        value={this.state.valorInputFotoUser}
        onChange={this.onChangeInputFotoUser}
        placeholder={"Insira sua foto"}
        />
        <Input 
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Insira sua foto"}
        />
        
        <Botao onClick={this.adicionarPost}>Adicionar</Botao>

        

      </MainContainer>
    );
  }
}





  // render() {

  //   return (
  //     <MainContainer>     
  //       <Post
  //         nomeUsuario={'paulinha'}
  //         fotoUsuario={'https://picsum.photos/50/50?random=1'}
  //         fotoPost={'https://picsum.photos/200/150?random=1'}
  //       />
  //       <Post
  //         nomeUsuario={'sartikov'}
  //         fotoUsuario={'https://picsum.photos/50/50?random=2'}
  //         fotoPost={'https://picsum.photos/200/150?random=2'}
  //       />
  //       <Post
  //         nomeUsuario={'anna'}
  //         fotoUsuario={'https://picsum.photos/50/50?random=3'}
  //         fotoPost={'https://picsum.photos/200/150?random=3'}
  //       />
  //     </MainContainer>
      
  //   );
  // }


export default App;

import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ol`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) =>
    completa ? "line-through" : "none"}; // ternário => CONDICAO ? TRUE :  FALSE
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [    
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {}

  componentDidMount() {}

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue, // aqui, o texto da tarefa virá do input controlado guardado no estado
      completa: false,
    };

    const copiaDoEstado = [...this.state.tarefas, novaTarefa];
    this.setState({ tarefas: copiaDoEstado, inputValue: "" });
  };

  selectTarefa = (id) => {
    const selecionaTarefa = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novoTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novoTarefa;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: selecionaTarefa });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;

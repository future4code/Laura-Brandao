import React from "react";
import styled from "styled-components";
import MainCard from "./Components/MainCard/MainCard";


const Container = styled.div`
  background-color: #cccccc ;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`



const App = () => {
    return (
        <Container>
            <MainCard />
        </Container>
    )
}

export default App
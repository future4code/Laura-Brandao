import React from "react";
import styled from "styled-components";
import Router from "./Route/Router";
import Background4 from "./Img/4.png";
import { GlobalStyles } from "./GlobalStyles";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Background4});
  background-repeat: no-repeat;
  background-size: cover ;
  
`;

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Router />
    </MainContainer>
  );
}

export default App;

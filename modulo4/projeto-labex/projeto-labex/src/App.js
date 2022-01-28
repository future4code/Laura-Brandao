import React from "react";
import index from "./index.css";
import styled from "styled-components";
import Router from "./Route/Router";
import Background4 from "./Img/4.png";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Background4});
  background-repeat: repeat-y;
  
`;

function App() {
  return (
    <MainContainer>
      <Router />
    </MainContainer>
  );
}

export default App;

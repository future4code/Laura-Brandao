import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const MainListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
  border: 1px solid black;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: rgb(117 117 117 / 77%) 0px 4px 10px 0px;
  text-align: left;
`;
const ContainerButton = styled.div`
  position: fixed;
  align-self: flex-end;
  margin-right: 5px;

`;
const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgb(117 117 117 / 77%) 0px 4px 10px 0px;
`;
const MatchName = styled.span`
  margin-left: 1em;
  font-family: Roboto;
  font-size: 24px;
`;

const ListCard = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-lanna-joy/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((error) => {
      });
  };

  const matchesMapped = matches.map((match) => {
    return (
      <div key={match.id}>
        <ImageProfile src={match.photo} />
        <MatchName>{match.name}</MatchName>
      </div>
    );
  });

  const clearMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-lanna-joy/clear"
      )
      .then((res) => {
        window.alert("A lista de matches foi resetada!");
        getMatches();

      })
      .catch((err) => {});
  };

  return (
    <MainListContainer>
      {matches.length === 0 ? (<div><p>Que pena! Você não tem nenhum match! 💔 </p></div>) : (matches && matchesMapped)}
      <ContainerButton>
        <Button
          onClick={() => clearMatches()}
          variant="contained"
          color="warning"
        >
          🗑️
        </Button>
      </ContainerButton>
    </MainListContainer>
  );
};

export default ListCard;

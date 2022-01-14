import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid black;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
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
        console.log(error);
      });
  };

  const matchesMapped = matches.map((match) => {
    return (
      <div key={match.id}>
        <p>{match.name}</p>
      </div>
    );
  });

  return (
    <MainCardContainer>
      {matches && matchesMapped}
    </MainCardContainer>
  );
};

export default ListCard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../Header/Header";

const ListCard = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lanna/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <div></div>;
};

export default ListCard;

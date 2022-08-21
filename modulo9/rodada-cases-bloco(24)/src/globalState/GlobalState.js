import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";

export const GlobalState = (props) => {
  const [games, setGames] = useState([]);
  const [options, setOptions] = useState("");
  const [contest, setContest] = useState([]);
  const [result, setResult] = useState([]);
  const [luck, setLuck] = useState({ loteriaId: 0, concursoId: "2359" });
  const [name, setName] = useState({ loteriaId: 0, nome: "mega-sena" });

  useEffect(() => {
    getLotto();
    getContest();
  }, []);

  useEffect(() => {
    sortGame();
  }, [options]);

  const getLotto = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setGames(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const getContest = async () => {
    await axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setContest(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const sortGame = async () => {
    await axios
      .get(`${BASE_URL}/concursos/${luck.concursoId}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = {
    games,
    setGames,
    contest,
    setContest,
    result,
    setResult,
    options,
    setOptions,
    luck,
    setLuck,
    name,
    setName,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

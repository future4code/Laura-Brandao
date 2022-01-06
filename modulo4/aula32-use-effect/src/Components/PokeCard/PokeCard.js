import React, { useState, useEffect } from "react";
import axios from "axios";


function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(
    () => {
      pegaPokemon(props.pokemon);
    },
    [props.pokemon]
  );

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pokemonList = pokemon

  return (
    <div>
      <p>{pokemonList.name}</p>
      <p>{pokemonList.weight} Kg</p>
      {pokemonList.types && <p>{pokemonList.types[0].type.name}</p>}
      {pokemonList.sprites && (
        <img src={pokemonList.sprites.front_default} alt={pokemonList.name} />
      )}
    </div>
  );
}

export default PokeCard;

import printPokemonList from "./printPokemonList.js";
'use strict'


const baseUrl = "https://pokeapi.co/api/v2/pokemon";

fetch(baseUrl)
  .then(res => res.json())
  .then(data => {
    printPokemonList(data)
  })
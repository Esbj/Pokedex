import printPokemonList from "./printPokemonList.js";
'use strict'


let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let offsetParam = urlParams.get("offset");


fetch("https://pokeapi.co/api/v2/pokemon/?offset=" + offsetParam)
  .then(res => res.json())
  .then(data => {
    printPokemonList(data.results, offsetParam)
  })
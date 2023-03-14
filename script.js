'use strict'
let list = document.querySelector("#list");
let info = document.querySelector("#info");
const API = "https://pokeapi.co/api/v2/pokemon";

fetch(API)
.then(res => res.json())
.then(data => {
  printPokemonList(data)
})

function printPokemonList(pokemons) {
  console.log("data", pokemons)
  pokemons.results.map()
}
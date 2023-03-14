'use strict'
let list = document.querySelector("#list");
let info = document.querySelector("#info");
const baseUrl = "https://pokeapi.co/api/v2/pokemon";

fetch(baseUrl)
  .then(res => res.json())
  .then(data => {
    printPokemonList(data)
  })

function printPokemonList(pokemons) {
  let pokeList = document.createElement("ul")
  pokemons.results.map(pokemon => {
    let pokeLi = document.createElement("li")
    pokeLi.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    pokeLi.addEventListener("click", () => {
      printPokemonInfo(pokemon.url)
    })

    pokeList.appendChild(pokeLi);
  })
  list.appendChild(pokeList);
}

function printPokemonInfo(pokeUrl) {
  fetch(pokeUrl)
    .then(res => res.json())
    .then(data => {
      let pokemonInfoDiv = document.createElement("div");
      let pokemonName = document.createElement("h2");
      pokemonName.innerText = data.name.toUpperCase();

      let pokemonImage = document.createElement("img");
      pokemonImage.src = data.sprites.front_default;

      pokemonInfoDiv.append(pokemonName, pokemonImage);
      info.innerHTML = ""
      info.appendChild(pokemonInfoDiv)

    })
}
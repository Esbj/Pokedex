import printPokemonInfo from "./printPokemonInfo.js";
let list = document.querySelector("#list");


export default function printPokemonList(pokemons, offset) {
  let pokeList = document.createElement("ul")

  pokemons.map(pokemon => {
    let pokeLi = document.createElement("li")
    pokeLi.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    pokeLi.addEventListener("click", () => {
      printPokemonInfo(pokemon.url)
    })

    pokeList.appendChild(pokeLi);
  })

    let nextLink = document.createElement("a");
    nextLink.innerText = "Nästa";
    let newOffset = Number(offset) + 20;
    nextLink.href = "?offset=" + newOffset;
    list.appendChild(pokeList);
    list.appendChild(nextLink);
}
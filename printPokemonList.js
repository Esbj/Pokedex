import printPokemonInfo from "./printPokemonInfo.js";
let list = document.querySelector("#list");
export default function printPokemonList(pokemons) {
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
let info = document.querySelector("#info");
export default function printPokemonInfo(pokeUrl) {
  fetch(pokeUrl)
    .then(res => res.json())
    .then(data => {
      let pokemonInfoDiv = document.createElement("div");
      let pokemonName = document.createElement("h2");
      let abilities = document.createElement("p")
      let pokemonImage = document.createElement("img");

      abilities.style.backgroundColor = "pink"
      abilities.innerText = ""
      data.abilities.map(ab => {
        abilities.innerText += ab.ability.name + ", "
      })
      pokemonName.innerText = data.name.toUpperCase();
      pokemonImage.src = data.sprites.front_default;

      pokemonInfoDiv.append(pokemonName, pokemonImage, abilities);
      info.innerHTML = ""
      info.appendChild(pokemonInfoDiv)

    })
}
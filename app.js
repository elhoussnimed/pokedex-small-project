const pokemonContainer = document.querySelector(".container");
const pokemonsTypesColors = {
  water: "#1AAFE1",
  fire: "#F58C1F",
  grass: "#54B947",
  ground: "#78431B",
  rock: "#A7A097",
  steel: "#8B7E72",
  ice: "#C9EAFA",
  electric: "#FFCB08",
  dragon: "#E8E95F",
  ghost: "#E5E8EA",
  psychic: "#B11F83",
  normal: "#C56F21",
  fighting: "#8F191B",
  poison: "#D5C1C3",
  bug: "#BFD42F",
  flying: "#1487B4",
  dark: "#B6287C",
  fairy: "#FBCE85",
};

async function getAllPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=250");
  const data = await response.json();
  const pokemons = data.results;

  // fetch every pokemon with his url
  pokemons.forEach((pokemon) => {
    getSpesificPokemon(pokemon.url);
  });
}

getAllPokemon();

// get pokemons details and append in page
async function getSpesificPokemon(pokemon) {
  const response = await fetch(`${pokemon}`);
  const data = await response.json();
  const { name, id, sprites, types } = data;

  const pokemonWrapper = document.createElement("div");
  pokemonWrapper.classList.add("pokemon");
  switch (types[0]["type"].name) {
    case "water":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.water;
      break;
    case "fire":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.fire;
      break;
    case "grass":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.grass;
      break;
    case "ground":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.ground;
      break;
    case "rock":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.rock;
      break;
    case "steel":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.steel;
      break;
    case "ice":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.ice;
      break;
    case "electric":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.electric;
      break;
    case "dragon":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.dragon;
      break;
    case "ghost":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.ghost;
      break;
    case "psychic":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.psychic;
      break;
    case "normal":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.normal;
      break;
    case "fighting":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.fighting;
      break;
    case "poison":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.poison;
      break;
    case "bug":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.bug;
      break;
    case "flying":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.flying;
      break;
    case "dark":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.dark;
      break;
    case "fairy":
      pokemonWrapper.style.backgroundColor = pokemonsTypesColors.fairy;
      break;
    default:
      pokemonWrapper.style.backgroundColor = "lightblue";
  }

  const pokemonImgWrapper = document.createElement("div");
  pokemonImgWrapper.classList.add("pokemon_img");
  const pokemonImg = document.createElement("img");
  pokemonImg.src = sprites.front_default;

  const pokemonId = document.createElement("div");
  pokemonId.classList.add("pokemon_id");
  if (id < 10) {
    pokemonId.innerHTML = `#00${id}`;
  } else if (id >= 10 && id < 100) {
    pokemonId.innerHTML = `#0${id}`;
  } else {
    pokemonId.innerHTML = `#${id}`;
  }

  const pokemonName = document.createElement("div");
  pokemonName.classList.add("pokemon_name");
  pokemonName.innerHTML = name;

  const pokemonType = document.createElement("div");
  pokemonType.classList.add("pokemon_type");
  pokemonType.innerHTML = `type: ${types[0]["type"].name}`;

  pokemonImgWrapper.append(pokemonImg);
  pokemonWrapper.append(pokemonImgWrapper);
  pokemonWrapper.append(pokemonId);
  pokemonWrapper.append(pokemonName);
  pokemonWrapper.append(pokemonType);
  pokemonContainer.append(pokemonWrapper);
}

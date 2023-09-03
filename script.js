const pokemons = [
  // Fire Type Pokémon
  {
    number: 1,
    name: "Charmander",
    hp: "50",
    cuteness: "75",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    type: "fire",
  },
  {
    number: 2,
    name: "Vulpix",
    hp: "45",
    cuteness: "67",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    type: "fire",
  },
  {
    number: 3,
    name: "Magmar",
    hp: "65",
    cuteness: "37",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    type: "fire",
  },
  {
    number: 4,
    name: "Growlithe",
    hp: "55",
    cuteness: "40",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    type: "fire",
  },
  {
    number: 5,
    name: "Flareon",
    hp: "70",
    cuteness: "99",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    type: "fire",
  },
  {
    number: 6,
    name: "Charmeleon",
    hp: "60",
    cuteness: "25",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    type: "fire",
  },
  {
    number: 7,
    name: "Arcanine",
    hp: "80",
    cuteness: "82",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
    type: "fire",
  },
  {
    number: 8,
    name: "Moltres",
    hp: "90",
    cuteness: "10",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
    type: "fire",
  },
  {
    number: 9,
    name: "Rapidash",
    hp: "70",
    cuteness: "40",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
    type: "fire",
  },
  {
    number: 10,
    name: "Ninetales",
    hp: "75",
    cuteness: "99",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    type: "fire",
  },
  {
    number: 11,
    name: "Ponyta",
    hp: "55",
    cuteness: "75",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    type: "fire",
  },
  {
    number: 12,
    name: "Ho-Oh",
    hp: "100",
    cuteness: "34",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png",
    type: "fire",
  },
  {
    number: 13,
    name: "Entei",
    hp: "90",
    cuteness: "10",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png",
    type: "fire",
  },
  {
    number: 14,
    name: "Typhlosion",
    hp: "80",
    cuteness: "15",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
    type: "fire",
  },
  {
    number: 15,
    name: "Heatran",
    hp: "85",
    cuteness: "10",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/485.png",
    type: "fire",
  },

  // Water Type Pokémon
  {
    number: 16,
    name: "Squirtle",
    hp: "55",
    cuteness: "80",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    type: "water",
  },
  {
    number: 17,
    name: "Vaporeon",
    hp: "70",
    cuteness: "55",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    type: "water",
  },
  {
    number: 18,
    name: "Gyarados",
    hp: "75",
    cuteness: "20",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    type: "water",
  },
  {
    number: 19,
    name: "Blastoise",
    hp: "80",
    cuteness: "25",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    type: "water",
  },
  {
    number: 20,
    name: "Lapras",
    hp: "80",
    cuteness: "60",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    type: "water",
  },
  {
    number: 21,
    name: "Poliwag",
    hp: "60",
    cuteness: "95",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    type: "water",
  },
  {
    number: 22,
    name: "Magikarp",
    hp: "5",
    cuteness: "1",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    type: "water",
  },
  {
    number: 23,
    name: "Golduck",
    hp: "70",
    cuteness: "46",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
    type: "water",
  },
  {
    number: 24,
    name: "Starmie",
    hp: "70",
    cuteness: "12",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
    type: "water",
  },
  {
    number: 25,
    name: "Cloyster",
    hp: "55",
    cuteness: "13",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    type: "water",
  },
  // Electric Type Pokémon
  {
    number: 26,
    name: "Pikachu",
    hp: "45",
    cuteness: "72",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    type: "electric",
  },
  {
    number: 27,
    name: "Raichu",
    hp: "60",
    cuteness: "51",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    type: "electric",
  },
  {
    number: 28,
    name: "Jolteon",
    hp: "65",
    cuteness: "67",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    type: "electric",
  },
  {
    number: 29,
    name: "Zapdos",
    hp: "90",
    cuteness: "2",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    type: "electric",
  },
  {
    number: 30,
    name: "Ampharos",
    hp: "75",
    cuteness: "40",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png",
    type: "electric",
  },
  {
    number: 31,
    name: "Magnezone",
    hp: "70",
    cuteness: "10",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/462.png",
    type: "electric",
  },
  {
    number: 32,
    name: "Electivire",
    hp: "80",
    cuteness: "25",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/466.png",
    type: "electric",
  },
  {
    number: 33,
    name: "Pachirisu",
    hp: "55",
    cuteness: "85",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/417.png",
    type: "electric",
  },
  {
    number: 34,
    name: "Luxray",
    hp: "75",
    cuteness: "70",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/405.png",
    type: "electric",
  },
  {
    number: 35,
    name: "Raikou",
    hp: "80",
    cuteness: "30",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png",
    type: "electric",
  },
  {
    number: 36,
    name: "Emolga",
    hp: "45",
    cuteness: "100",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/587.png",
    type: "electric",
  },
  {
    number: 37,
    name: "Togedemaru",
    hp: "55",
    cuteness: "95",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/777.png",
    type: "electric",
  },
  {
    number: 38,
    name: "Dedenne",
    hp: "50",
    cuteness: "80",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/702.png",
    type: "electric",
  },
  {
    number: 39,
    name: "Shinks",
    hp: "45",
    cuteness: "95",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/403.png",
    type: "electric",
  },
  {
    number: 40,
    name: "Pichu",
    hp: "60",
    cuteness: "99",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png",
    type: "electric",
  },
  // Nature Type Pokémon
  {
    number: 41,
    name: "Bulbasaur",
    hp: "60",
    cuteness: "91",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    type: "nature",
  },
  {
    number: 42,
    name: "Ivysaur",
    hp: "70",
    cuteness: "67",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    type: "nature",
  },
  {
    number: 43,
    name: "Venusaur",
    hp: "80",
    cuteness: "45",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    type: "nature",
  },
  {
    number: 44,
    name: "Exeggutor",
    hp: "85",
    cuteness: "2",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    type: "nature",
  },
  {
    number: 45,
    name: "Meganium",
    hp: "90",
    cuteness: "63",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png",
    type: "nature",
  },
  {
    number: 46,
    name: "Chikorita",
    hp: "55",
    cuteness: "77",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
    type: "nature",
  },
  {
    number: 47,
    name: "Bayleef",
    hp: "65",
    cuteness: "88",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png",
    type: "nature",
  },
  {
    number: 48,
    name: "Sceptile",
    hp: "70",
    cuteness: "4",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png",
    type: "nature",
  },
  {
    number: 49,
    name: "Leafeon",
    hp: "75",
    cuteness: "91",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
    type: "nature",
  },
  {
    number: 50,
    name: "Celebi",
    hp: "90",
    cuteness: "94",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
    type: "nature",
  },
  {
    number: 51,
    name: "Turtwig",
    hp: "55",
    cuteness: "66",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png",
    type: "nature",
  },
  {
    number: 52,
    name: "Grotle",
    hp: "65",
    cuteness: "34",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/388.png",
    type: "nature",
  },
  {
    number: 53,
    name: "Torterra",
    hp: "80",
    cuteness: "20",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/389.png",
    type: "nature",
  },
  {
    number: 54,
    name: "Snivy",
    hp: "55",
    cuteness: "87",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png",
    type: "nature",
  },
  {
    number: 55,
    name: "Servine",
    hp: "65",
    cuteness: "89",
    imageSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png",
    type: "nature",
  },
];

let currentIndex = Math.floor(Math.random() * pokemons.length);

function updatePokemon(index) {
  const container = document.querySelector(".container");
  const nameElement = document.querySelector(".pokemon-name");
  const hpElement = document.querySelector(".pokemon-hp");
  const imageElement = document.querySelector(".pokemon-image");
  const typeElement = document.querySelector(".pokemon-type");

  if (index >= 0 && index < pokemons.length) {
    const pokemon = pokemons[index];
    nameElement.textContent = pokemon.name;
    hpElement.textContent = `HP: ${pokemon.hp}`;
    imageElement.src = pokemon.imageSrc;
    typeElement.src = `${pokemon.type}.png`;

    container.className = "container";
    container.classList.add(pokemon.type);

    const maxHP = 91;
    const currentHP = parseInt(pokemon.hp);
    updateHPBar(currentHP, maxHP);

    const maxCuteness = 100;
    const currentCuteness = parseInt(pokemon.cuteness);
    updateCutenessBar(currentCuteness, maxCuteness);
  } else {
    nameElement.textContent = "Invalid Pokémon Number";
    hpElement.textContent = "";
    imageElement.src = "";
    typeElement.src = "";
    container.className = "container";
  }
}

updatePokemon(0);

document.getElementById("next-button").addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * pokemons.length);
  updatePokemon(currentIndex);
});

document.getElementById("search-button").addEventListener("click", () => {
  const inputElement = document.getElementById("pokemon-number");
  const inputValue = parseInt(inputElement.value);
  
  if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 60) {
    updatePokemon(inputValue - 1); 
  } else {
    alert("Please enter a valid Pokémon number between 1 and 60.");
  }

  inputElement.value = "";
});

function updateHPBar(currentHP, maxHP) {
  const hpBarFill = document.querySelector(".hp-bar-fill");

  const hpPercentage = (currentHP / maxHP) * 100;

  hpBarFill.style.width = `${hpPercentage}%`;
}

function updateCutenessBar(cuteness) {
  const cutenessBarFill = document.querySelector(".cuteness-bar-fill");

  cuteness = Math.min(100, Math.max(0, cuteness));

  cutenessBarFill.style.width = `${cuteness}%`;
}

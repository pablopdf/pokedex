const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeContainer = document.querySelector('[data-poke-img-container]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-type]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors = {
    electric: '#FFEA70',
    normal: '#b09398',
    fire: '#ff6775c',
    water: '#0596c7',
    ice: '#afeafd',
    rock: '#999799',
    flying: '#7ae7c7',
    grass: '#4a9681',
    psychic: '#ffc6d9',
    ghost: '#561d25',
    bug: '#a2faa3',
    poison: '#795663',
    ground: '#d2b074',
    dragon: '#da627d',
    steel: '#1d8a99',
    fighting: '#2f2f2f',
    default: '#2a1a1f',
};


const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data =>data.json())
    .then(Response => renderPokemonData(Response))
}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `N° ${data.id}`;
    setCardColor(types);
}


const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
}
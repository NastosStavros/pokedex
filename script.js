let allPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon',
'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey',
'pidgeotto', 'pidgeot', 'rattata', 'raticate']
let currentPokemon;


async function loadPokemon() {
    for (let i = 0; i < allPokemon.length; i++) {
        let pokemon = allPokemon[i];
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log(currentPokemon);
        createPokemonCard(pokemon);
    }
}

function createPokemonCard(pokemon) {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML += `<div id="pokedex-card-${pokemon}" class="card" style="width: 18rem;">
    <img id="pokemonImage${pokemon}" src="" class="card-img-top">
    <div class="card-body">
        <h5 id="pokemonName-${pokemon}" class="card-title"></h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>`;
showPokemonInfo(pokemon);
}

function showPokemonInfo(pokemon) {
    let pokemonName = document.getElementById(`pokemonName-${pokemon}`);
    let pokemonImage = document.getElementById(`pokemonImage${pokemon}`);
    pokemonName.innerHTML = currentPokemon['name'];
    pokemonImage.src = currentPokemon['sprites']['front_default'];
}
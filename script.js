let allPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon',
'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey',
'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow',
'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash',
'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking',
'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff',
'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect',
'venonat', 'venomoth']
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
        <p id="pokemonType${pokemon}" class="card-text"></p>
    </div>
</div>`;
showPokemonInfo(pokemon);

}

function showPokemonInfo(pokemon) {
    let pokemonName = document.getElementById(`pokemonName-${pokemon}`);
    let pokemonImage = document.getElementById(`pokemonImage${pokemon}`);
    let pokemonType = document.getElementById(`pokemonType${pokemon}`);
    let pokemonTypeInfo = currentPokemon['types'][0]['type']['name'];
    pokemonName.innerHTML = currentPokemon['name'];
    pokemonImage.src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    pokemonType.innerHTML ="Type : " +pokemonTypeInfo;
    showBgbyType(pokemonType, pokemonTypeInfo);
}

function showBgbyType(pokemonType, pokemonTypeInfo) {
    if (pokemonTypeInfo === 'fire') {
        pokemonType.classList.add('bg-fire');
    }
    if (pokemonTypeInfo === 'grass') {
        pokemonType.classList.add('bg-grass');
    }
    if (pokemonTypeInfo === 'water') {
        pokemonType.classList.add('bg-water');
    }
    if (pokemonTypeInfo === 'normal') {
        pokemonType.classList.add('bg-normal');
    }
    if (pokemonTypeInfo === 'poison') {
        pokemonType.classList.add('bg-poison');
    }
    if (pokemonTypeInfo === 'ground') {
        pokemonType.classList.add('bg-ground');
    }
    if (pokemonTypeInfo === 'electric') {
        pokemonType.classList.add('bg-electric');
    }
    if (pokemonTypeInfo === 'bug') {
        pokemonType.classList.add('bg-bug');
    }
    if (pokemonTypeInfo === 'fairy') {
        pokemonType.classList.add('bg-fairy');
    } 
}

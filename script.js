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
    <div id="cardBody${pokemon}" class="card-body">
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
    let cardBody = document.getElementById(`cardBody${pokemon}`);
    pokemonName.innerHTML = currentPokemon['name'];
    pokemonImage.src = currentPokemon['sprites']['other']['home']['front_default'];
    pokemonType.innerHTML ="Type : " +pokemonTypeInfo;
    showBgbyType(cardBody, pokemonTypeInfo);
}

function showBgbyType(cardBody, pokemonTypeInfo) {
    if (pokemonTypeInfo === 'fire') {
        cardBody.classList.add('bg-fire');
    }
    if (pokemonTypeInfo === 'grass') {
        cardBody.classList.add('bg-grass');
    }
    if (pokemonTypeInfo === 'water') {
        cardBody.classList.add('bg-water');
    }
    if (pokemonTypeInfo === 'normal') {
        cardBody.classList.add('bg-normal');
    }
    if (pokemonTypeInfo === 'poison') {
        cardBody.classList.add('bg-poison');
    }
    if (pokemonTypeInfo === 'ground') {
        cardBody.classList.add('bg-ground');
    }
    if (pokemonTypeInfo === 'electric') {
        cardBody.classList.add('bg-electric');
    }
    if (pokemonTypeInfo === 'bug') {
        cardBody.classList.add('bg-bug');
    }
    if (pokemonTypeInfo === 'fairy') {
        cardBody.classList.add('bg-fairy');
    } 
}

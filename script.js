let allPokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard',
    'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree',
    'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata',
    'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu',
    'sandshrew', 'sandslash', 'nidorina', 'nidoqueen',
    'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales',
    'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume',
    'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth',
    'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine',
    'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop',
    'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool',
    'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke',
    'slowbro', 'magnemite', 'magneton', 'doduo', 'dodrio', 'seel',
    'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar',
    'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute',
    'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing',
    'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea',
    'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'scyther',
    'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados',
    'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon',
    'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno',
    'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];
let currentPokemon

async function loadPokemon() {
    for (let i = 0; i < allPokemon.length; i++) {
        let pokemon = allPokemon[i];
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log(currentPokemon);
        createPokedex(pokemon);
    };
}


function createPokedex(pokemon) {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML += `<div id="pokedex-card-${pokemon}" class="card" style="width: 18rem;">
    <img onclick="createPokemonCard()"id="pokemonImage${pokemon}" src="" class="card-img-top">
    <div id="cardBody${pokemon}" class="card-body">
    
        <h5 id="pokemonName-${pokemon}" class="card-title"></h5>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        
  <div id="progressBar${pokemon}" class="progress-bar" style="width: 25%"> </div>
</div>
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
    let hp = currentPokemon['stats'][0]['base_stat'];
    pokemonName.innerHTML = currentPokemon['name'];
    pokemonImage.src = currentPokemon['sprites']['other']['home']['front_default'];
    pokemonType.innerHTML = "Type : " + pokemonTypeInfo;
    showBgbyType(cardBody, pokemonTypeInfo);
    showHp(pokemon, hp);
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
    if (pokemonTypeInfo === 'fighting') {
        cardBody.classList.add('bg-fighting');
    }
    if (pokemonTypeInfo === 'rock') {
        cardBody.classList.add('bg-rock');
    }
    if (pokemonTypeInfo === 'ice') {
        cardBody.classList.add('bg-ice');
    }
    if (pokemonTypeInfo === 'psychic') {
        cardBody.classList.add('bg-psychic');
    }
    if (pokemonTypeInfo === 'ghost') {
        cardBody.classList.add('bg-ghost');
    }
    if (pokemonTypeInfo === 'dragon') {
        cardBody.classList.add('bg-dragon');
    }
}


function showHp(pokemon, hp) {
    let hpBar = document.getElementById(`progressBar${pokemon}`);
    hpBar.innerHTML = hp;
    hpBar.innerHTML += ` HP`;
    hpBar.style = `width: ${hp}%`;
}


function createPokemonCard(pokemon) {
    let card = document.getElementById('pokemonCard');
    let pokedex = document.getElementById('pokedex');

    pokedex.classList.add('d-none');

    card.innerHTML = `<div id="pokedexCardBig${pokemon}"  style="width: 18rem;">
    <img onclick="createPokemonCard()"id="pokemonImageBig${pokemon}" >
    <div id="cardBodyBig${pokemon}" >
    
        <h5 id="pokemonNameBig${pokemon}" class="card-title"></h5>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        
  <div id="progressBar${pokemon}" class="progress-bar" style="width: 25%"> </div>
</div>
        <p id="pokemonTypeBig${pokemon}" class="card-text"></p>
        <button id="backButton" onclick="goBackToPokedex()">back to Pokedex</button>
    </div>
</div>`;
showPokemonInfoBigCard(pokemon);
}

function showPokemonInfoBigCard(pokemon) {
    
    let pokemonNameBigger = document.getElementById(`pokemonNameBig${pokemon}`);
    let pokemonImageBigger= document.getElementById(`pokemonImageBig${pokemon}`);
    let hpBigger = currentPokemon['stats'][0]['base_stat'];
    pokemonNameBigger.innerHTML = currentPokemon['name'];
    pokemonImageBigger.src = currentPokemon['sprites']['other']['home']['front_default'];
    showHp(pokemon, hpBigger);
}




function goBackToPokedex() {
    let card = document.getElementById('pokemonCard');
    let pokedex = document.getElementById('pokedex');

    card.innerHTML = '';
    pokedex.classList.remove('d-none');
}

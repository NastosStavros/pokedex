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

    let pokemonArray = []; // after fetch for the URL, pokemons get pushed into this array

    async function loadPokemon() {
        for (let i = 0; i < allPokemon.length; i++) {
            let pokemon = allPokemon[i];
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            let response = await fetch(url);
            const currentPokemon = await response.json();
            pokemonArray.push(currentPokemon);
        }
        createPokedex();
<<<<<<< HEAD
        console.log(pokemonArray);
=======
>>>>>>> 891188f93b504739e0b0ec7184ca4ca2038997d3
    }
                               
                                                                                    // creates all cards in  first main-overview
    function createPokedex() {                                      
        let pokedex = document.getElementById('pokedex');
        for (let i = 0; i < pokemonArray.length; i++) {
            let currentPokemon = pokemonArray[i];
            let pokemon = allPokemon[i];
            pokedex.innerHTML += `
        <div id="pokedex-card-${pokemon}" class="pokedex-card" style="width: 18rem;">
            <img onclick="createPokemonCard(${i})" id="pokemonImage${pokemon}" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" class="card-img-main">
                    
                <div id="cardBody${pokemon}" class="card-body">
                        <h5 id="pokemonName-${pokemon}" class="card-title">${currentPokemon.name}</h5>
                        <p id="pokemonType${pokemon}" class="card-text">Type : ${currentPokemon.types[0].type.name}</p>
                </div>
        </div>`;
        }
    }


function showPokemonInfo(pokemon, currentPokemon) {
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


<<<<<<< HEAD
=======
function showHp(pokemon, hp) {
    let hpBar = document.getElementById(`progressBar${pokemon}`);
    hpBar.innerHTML = hp;
    hpBar.innerHTML += ` HP`;
    hpBar.style = `width: ${hp}%`;
}
>>>>>>> 891188f93b504739e0b0ec7184ca4ca2038997d3


function createPokemonCard(pokemonIndex) {
    let selectedPokemon = pokemonArray[pokemonIndex];
    let card = document.getElementById('pokemonCard');
    let pokedex = document.getElementById('pokedex');

    pokedex.classList.add('d-none');

    card.innerHTML = `
            <div id="pokedex-big-card-${selectedPokemon.name}" class="overlay-name">
            ${selectedPokemon.name}
            </div>
                <p id="pokemonType${selectedPokemon.name}" class="">Type: ${selectedPokemon.types[0].type.name}</p>
            <img id="pokemonOverlayImage" src="${selectedPokemon['sprites']['other']['home']['front_default']}"> 
            
            
            <div id="infoBars">
               
<<<<<<< HEAD
                <div class="overlayHpBar"> HP
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div id="progressBar${selectedPokemon.name}" class="progress-bar progress-bar-striped hp" style="width: ${selectedPokemon.stats[0]['base_stat']}%">${selectedPokemon['stats'][0]['base_stat']}
                            </div> 
                            </div>
                    </div>
                         
                    <div class="overlayHpBar"> ATK
                    <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div id="progressBar${selectedPokemon.name}" class="progress-bar progress-bar-striped  bg-ground" style="width: ${selectedPokemon.stats[1]['base_stat']}%">${selectedPokemon['stats'][1]['base_stat']}
                    </div>
                    </div>
                    </div>

                    <div class="overlayHpBar"> DEF
                    <div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div id="progressBar${selectedPokemon.name}" class="progress-bar progress-bar-striped  bg-blue" style="width: ${selectedPokemon.stats[2]['base_stat']}%">${selectedPokemon['stats'][2]['base_stat']}
                    </div>
                    </div>
                    </div>

                    <div class="overlayHpBar"> SPD
                    <div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div id="progressBar${selectedPokemon.name}" class="progress-bar progress-bar-striped bg-magenta" style="width: ${selectedPokemon.stats[5]['base_stat']}%">${selectedPokemon['stats'][5]['base_stat']}
                    </div>
                    </div>
                    </div>

                    
=======
                <div id="overlayHpBar"> HP
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div id="progressBar${selectedPokemon.name}" class="progress-bar progress-bar-striped" style="width: ${selectedPokemon.stats[0]['base_stat']}%">${selectedPokemon['stats'][0]['base_stat']}
                            </div> 
                            </div>
                    </div>
                                                
                
                    <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    <div id="progressBar${selectedPokemon.name}" class="progress-bar progress-bar-striped" style="width: 10%"></div>
                    </div>

                    <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
                    </div>

                    <div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
                    </div>

                    <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
                    </div>

                    <div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
                    </div>
>>>>>>> 891188f93b504739e0b0ec7184ca4ca2038997d3


            </div>    
                <button id="backButton" onclick="goBackToPokedex()">Back to Pokedex</button>`;
}

                                                                                           // shows pokemon info and stats in overlaycard
function showPokemonInfoOverlay(currentPokemon) {                            
    let pokemonName = document.getElementById(`pokemonName-${currentPokemon}`);
    let pokemonImage = document.getElementById(`pokemonOverlayImage${currentPokemon}`);
    let pokemonType = document.getElementById(`pokemonType${currentPokemon}`);
    let pokemonTypeInfo = currentPokemon['types'][0]['type']['name'];
    let cardBody = document.getElementById(`cardBody${currentPokemon}`);
    let hp = currentPokemon['stats'][0]['base_stat'];
    pokemonName.innerHTML = currentPokemon['name'];
    pokemonType.innerHTML = "Type : " + pokemonTypeInfo;
    showBgbyType(cardBody, pokemonTypeInfo);
    showHp(pokemon, hp);
}


function goBackToPokedex() {                                //back to all Pokemon  MAIN overview 
    let card = document.getElementById('pokemonCard');
    let pokedex = document.getElementById('pokedex');
    card.innerHTML = '';
    pokedex.classList.remove('d-none');
}


function goBackToPokedex() {
    let card = document.getElementById('pokemonCard');
    let pokedex = document.getElementById('pokedex');

    card.innerHTML = '';
    pokedex.classList.remove('d-none');
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


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

        console.log(pokemonArray);

    }
                               
                                                                                    // creates all cards in  first main-overview
    function createPokedex() {                                      
        let pokedex = document.getElementById('pokedex');
        for (let i = 0; i < pokemonArray.length; i++) {
            let currentPokemon = pokemonArray[i];
            let pokemon = allPokemon[i];
            pokedex.innerHTML += `
        <div id="pokedex-card-${pokemon}" class="pokedex-card" style="width: 18rem;">

            <img onclick="createPokemonCard(${i})" id="pokemonImage${pokemon}" 
            src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" class="card-img-main">
                    
                <div id="cardBodyElement${pokemon}" class="card-body">
                        <h5 >${currentPokemon.name}</h5>
                        <p>Type : ${currentPokemon.types[0].type.name}</p>
                
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




function createPokemonCard(pokemonIndex) {
    let selectedPokemon = pokemonArray[pokemonIndex];
    let card = document.getElementById('pokemonCard');
    let pokedex = document.getElementById('pokedex');

    card.classList.remove('d-none');

    card.innerHTML = `

      <div id="content-overlay">      
            <div id="pokemonName${selectedPokemon.name}" class="overlay-name">
            ${selectedPokemon.name}
            </div>
                <p id="pokemonType${selectedPokemon.name}" class="">Type: ${selectedPokemon.types[0].type.name}</p>
            <img class="image-overlay"id="pokemonOverlayImage" src="${selectedPokemon['sprites']['other']['home']['front_default']}"> 
            
            <div id="infoBars">
               
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
            </div>    
                <button id="backButton" onclick="goBackToPokedex()">Back to Pokedex</button>
          </div>      
                `;


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
    card.classList.add('d-none');
}



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
                                            // Sammelt alle Fetch-Promises in einem Array
    const fetchPromises = allPokemon.map(async (pokemon) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        return response.json();
    });

                                            // Warte auf alle Fetch-Promises gleichzeitig
    const pokemonDataArray = await Promise.all(fetchPromises);

                                            // Füge alle Pokemon-Daten dem Array hinzu
    pokemonArray.push(...pokemonDataArray);

                                        // Ruft unsere Funktion erst nach Abschluss aller API-Aufrufe auf
    createPokedex();
}

// creates all cards in  first main-overview
function createPokedex() {
    let pokedex = document.getElementById('pokedex');
    for (let i = 0; i < pokemonArray.length; i++) {
        let currentPokemon = pokemonArray[i];
        pokedex.innerHTML += `
        <div id="pokedex-card-${currentPokemon}" class="pokedex-card" style="width: 18rem;">
                    <img onclick="createPokemonCard(${i})" id="pokemonImage${currentPokemon}" 
                    src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" class="card-img-main">
             <div id="cardBodyElement${currentPokemon}" class="card-body-pokemon">
                    <h5 >${currentPokemon.name}</h5>
                    <p>Type : ${currentPokemon.types[0].type.name}</p>
             </div>
        </div>`;
    }
}


function showPokemonInfo(currentPokemon) {
    let pokemonName = document.getElementById(`pokemonName-${currentPokemon}`);
    let pokemonImage = document.getElementById(`pokemonImage${currentPokemon}`);
    let pokemonType = document.getElementById(`pokemonType${currentPokemon}`);
    let pokemonTypeInfo = currentPokemon['types'][0]['type']['name'];
    let cardBody = document.getElementById(`cardBody${currentPokemon}`);
    let hp = currentPokemon['stats'][0]['base_stat'];
    pokemonName.innerHTML = currentPokemon['name'];
    pokemonImage.src = currentPokemon['sprites']['other']['home']['front_default'];
    pokemonType.innerHTML = "Type : " + pokemonTypeInfo;
    showBgbyType(cardBody, pokemonTypeInfo);
    showHp(pokemon, hp);
}


function createPokemonCard(pokemonIndex) {          // shows pokemon in overlay
    let selectedPokemon = pokemonArray[pokemonIndex];
    let card = document.getElementById('pokemonCard');
    
    card.classList.remove('d-none');
    card.innerHTML = `
       <div><button id="previousButton" onclick="previousPokemon(${pokemonIndex})"><</button></div>
      <div id="content-overlay">      
            <div id="pokemonName${selectedPokemon.name}" class="overlay-name">
            ${selectedPokemon.name}
            </div>
                <p id="pokemonType${selectedPokemon.name}" class="">Type: ${selectedPokemon.types[0].type.name}</p>
            <img class="image-overlay"id="pokemonOverlayImage" src="${selectedPokemon['sprites']['other']['home']['front_default']}"> 

                <div id="OverlayButtons">
                <button id="OverlayBtn1">Stats</button>
                <button id="OverlayBtn2">more Info</button>
                </div>
                    
     <div id="OverlayBottom">
      
         <div id="infoBars">
                    
                        <h1 id="headingStats">Stats</h1>
 
                    <div class="overlayHpBar marginPlus"> HP
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
 
    </div>


                <button id="backButton" onclick="goBackToPokedex()">Back to Pokedex</button>
          </div>    
          <div><button id="nextButton" onclick="nextPokemon(${pokemonIndex})">></button></div>  
                `;
}


   
    function showPokemonInfoOverlay(currentPokemon) {
    let pokemonName = document.getElementById(`pokemonName-${currentPokemon}`);
    let pokemonType = document.getElementById(`pokemonType${currentPokemon}`);
    let pokemonTypeInfo = currentPokemon['types'][0]['type']['name'];
    let cardBody = document.getElementById(`cardBody${currentPokemon}`);
    pokemonName.innerHTML = currentPokemon['name'];
    pokemonType.innerHTML = "Type : " + pokemonTypeInfo;
    showBgbyType(cardBody, pokemonTypeInfo);

}

    //back to all Pokemon  MAIN overview 
    function goBackToPokedex() {                              
    let card = document.getElementById('pokemonCard');
    card.innerHTML = '';
    card.classList.add('d-none');
}

    function previousPokemon(pokemonIndex) {
    if (pokemonIndex == 0) {
    pokemonIndex += 146;
    } else {
    pokemonIndex--;
    }
    createPokemonCard(pokemonIndex);
    console.log(pokemonIndex);
}


function nextPokemon(pokemonIndex) {
    if (pokemonIndex == 146) {
        pokemonIndex -= 146;
        } else {
    pokemonIndex++;
    }
    createPokemonCard(pokemonIndex);
    console.log(pokemonIndex);
}


function changeBackgrounds(currentPokemon){


}
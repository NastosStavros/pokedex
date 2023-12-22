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
        let currentPokemon = await response.json();
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
        pokedex.innerHTML += `
        <div id="pokedex-card" class="pokedex-card" style="width: 18rem;">
                    <img onclick="createPokemonCard(${i})" id="pokemonImage${currentPokemon}" 
                    src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" class="card-img-main">
             <div id="cardBodyElement${i}" class="card-body-pokemon">
                    <h5 >${currentPokemon.name}</h5>
                    <p>Type : ${currentPokemon.types[0].type.name}</p>
             </div>
        </div>`;
       showBgbyType(currentPokemon, i);
    }
    
}

function createPokemonCard(i) {          // shows pokemon in overlay
    let selectedPokemon = pokemonArray[i];
    let card = document.getElementById('pokemonCard');

    card.classList.remove('d-none');
    card.innerHTML = `
       <div><button id="previousButton" onclick="previousPokemon(${i})"><</button></div>
      <div id="content-overlay">      
            <div id="pokemonName${selectedPokemon.name}" class="overlay-name">
            ${selectedPokemon.name}
            </div>
                <p id="pokemonType${selectedPokemon.name}" class="">Type: ${selectedPokemon.types[0].type.name}</p>
                <div id="overlayImageContainer${i}">
            <img class="image-overlay"id="pokemonOverlayImage" src="${selectedPokemon['sprites']['other']['home']['front_default']}"> 
                </div>
        <div id="elementIcon">
               <img id="elementIconBig" src="">
        </div>
                    
        <div id="OverlayBottom">

        <div id="infoDiv" class="d-none"></div>
      
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
          <div><button id="nextButton" onclick="nextPokemon(${i})">></button></div>  
                `;
                showOverlayBgbyType(selectedPokemon, i);
}





//back to all Pokemon  MAIN overview 
function goBackToPokedex() {
    let card = document.getElementById('pokemonCard');
    card.innerHTML = '';
    card.classList.add('d-none');
}

function previousPokemon(i) {
    if (i == 0) {
        i += 146;
    } else {
        i--;
    }
    createPokemonCard(i);
    console.log(i);
}


function nextPokemon(i) {
    if (i == 146) {
        i -= 146;
    } else {
        i++;
    }
    createPokemonCard(i);
    console.log(i);
}

function showBgbyType(currentPokemon, i) {
     let type = currentPokemon['types'][0]['type']['name'];
     let infoCard = document.getElementById(`cardBodyElement${i}`);

     if (type == 'fire'){
        infoCard.classList.add('bg-fire');
     }
     if (type == 'grass'){
        infoCard.classList.add('bg-grass');
     }
     if (type == 'dragon'){
        infoCard.classList.add('bg-dragon');
     }
     if (type == 'water'){
        infoCard.classList.add('bg-water');
     }
     if (type == 'fighting'){
        infoCard.classList.add('bg-fighting');
     }
     if (type == 'bug'){
        infoCard.classList.add('bg-bug');
     }
     if (type == 'electric'){
        infoCard.classList.add('bg-electric');
     }
     if (type == 'dragon'){
        infoCard.classList.add('bg-dragon');
     }
     if (type == 'normal'){
        infoCard.classList.add('bg-normal');
     }
     if (type == 'poison'){
        infoCard.classList.add('bg-poison');
     }
     if (type == 'psychic'){
        infoCard.classList.add('bg-psychic');
     }
     if (type == 'ground'){
        infoCard.classList.add('bg-ground');
     }
     if (type == 'rock'){
        infoCard.classList.add('bg-rock');
     }
     if (type == 'fairy'){
        infoCard.classList.add('bg-fairy');
     }
     if (type == 'ghost'){
        infoCard.classList.add('bg-ghost');
     }
     if (type == 'ice'){
        infoCard.classList.add('bg-ice');
     }
}

function showOverlayBgbyType(selectedPokemon, i) {
    let type = selectedPokemon['types'][0]['type']['name'];
    let overlayImage = document.getElementById(`overlayImageContainer${i}`)

    if (type == 'fire') {
        overlayImage.classList.add('bg-img-fire');
    }

    if (type == 'water') {
        overlayImage.classList.add('bg-img-water');
    }

    if (type == 'grass') {
        overlayImage.classList.add('bg-img-grass');
    }

    if (type == 'electric') {
        overlayImage.classList.add('bg-img-electric');
    }
}


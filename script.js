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

function searchPokemon() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let filteredPokemon = pokemonArray.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput));

    if (filteredPokemon.length > 0) {
        createFilteredPokedex(filteredPokemon);
    } else {
        alert('No matching Pokemon found.');
    }
}

function createFilteredPokedex(filteredPokemon) {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = '';

    for (let i = 0; i < filteredPokemon.length; i++) {
        let currentPokemon = filteredPokemon[i];
        let originalIndex = pokemonArray.indexOf(currentPokemon);

        pokedex.innerHTML += filteredPokemonTemplate(originalIndex, currentPokemon);
        showBgbyType(currentPokemon, originalIndex);
    }
}


let loaded = false
let enoughTimePassed = false

window.addEventListener("load", function() {
  if (enoughTimePassed) { hidePreloader() }
  loaded = true
})

setTimeout(() => {
  if (loaded) { hidePreloader() }
  enoughTimePassed = true
}, 1000)

function hidePreloader() {
   document.getElementById("preloader").remove()
}

async function loadPokemon() {
    const promises = allPokemon.map(async (pokemon) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let response = await fetch(url);
        return response.json();
    });

    pokemonArray = await Promise.all(promises);

    createPokedex();
    console.log(pokemonArray);
}

function createPokedex() { // creates all cards in  first main-overview 
    let pokedex = document.getElementById('pokedex');
    for (let i = 0; i < pokemonArray.length; i++) {
        let currentPokemon = pokemonArray[i];
        pokedex.innerHTML += pokedexTemplate(i, currentPokemon);
        showBgbyType(currentPokemon, i);
    }
}


function createPokemonCard(i) {   // shows pokemon in overlay
    let selectedPokemon = pokemonArray[i];
    let card = document.getElementById('pokemonCard');

    card.classList.remove('d-none');
    card.innerHTML = overlayCardTemplate(i, selectedPokemon);
    showOverlayBgbyType(selectedPokemon, i);
}


function goBackToPokedex() { // leads back to main-overview
    let card = document.getElementById('pokemonCard');
    card.innerHTML = '';
    card.classList.add('d-none');
}


function previousPokemon(i) {   //perv-button
    if (i == 0) {
        i += 146;
    } else {
        i--;
    }
    createPokemonCard(i);
    console.log(i);
}


function nextPokemon(i) {      //next-button
    if (i == 146) {
        i -= 146;
    } else {
        i++;
    }
    createPokemonCard(i);
    console.log(pokemonArray);
}


function showBgbyType(currentPokemon, i) {  // adds background colors for specific types of pokemon
    let type = currentPokemon['types'][0]['type']['name'];
    let infoCard = document.getElementById(`cardBodyElement${i}`);

    if (type == 'fire') {
        infoCard.classList.add('bg-fire');
        infoCard.classList.add('bg-img-fireSUB');
    }
    if (type == 'grass') {
        infoCard.classList.add('bg-grass');
        infoCard.classList.add('bg-img-grassSUB');

    }
    if (type == 'dragon') {
        infoCard.classList.add('bg-dragon');
        infoCard.classList.add('bg-img-dragonSUB');

    }
    if (type == 'water') {
        infoCard.classList.add('bg-water');
        infoCard.classList.add('bg-img-waterSUB');

    }
    if (type == 'fighting') {
        infoCard.classList.add('bg-fighting');
        infoCard.classList.add('bg-img-fightingSUB');

    }
    if (type == 'bug') {
        infoCard.classList.add('bg-bug');
        infoCard.classList.add('bg-img-bugSUB');

    }
    if (type == 'electric') {
        infoCard.classList.add('bg-electric');
        infoCard.classList.add('bg-img-electricSUB');

    }

    if (type == 'normal') {
        infoCard.classList.add('bg-normal');
        infoCard.classList.add('bg-img-normalSUB');

    }
    if (type == 'poison') {
        infoCard.classList.add('bg-poison');
        infoCard.classList.add('bg-img-poisonSUB');

    }
    if (type == 'psychic') {
        infoCard.classList.add('bg-psychic');
        infoCard.classList.add('bg-img-psychicSUB');

    }
    if (type == 'ground') {
        infoCard.classList.add('bg-ground');
        infoCard.classList.add('bg-img-groundSUB');

    }
    if (type == 'rock') {
        infoCard.classList.add('bg-rock');
        infoCard.classList.add('bg-img-rockSUB');

    }
    if (type == 'fairy') {
        infoCard.classList.add('bg-fairy');
        infoCard.classList.add('bg-img-fairySUB');

    }
    if (type == 'ghost') {
        infoCard.classList.add('bg-ghost');
        infoCard.classList.add('bg-img-ghostSUB');

    }
    if (type == 'ice') {
        infoCard.classList.add('bg-ice');
        infoCard.classList.add('bg-img-iceSUB');

    }
}


function showOverlayBgbyType(selectedPokemon, i) { // adds colored images to bgs for specific pokemon types
    let type = selectedPokemon['types'][0]['type']['name'];
    let overlayImage = document.getElementById(`elementIcon${i}`)
    let overlayBg = document.getElementById(`contentOverlay${i}`)

    if (type == 'fire') {
        overlayImage.classList.add('bg-img-fire');
        overlayBg.classList.add('bg-fireSUB');
    }

    if (type == 'water') {
        overlayImage.classList.add('bg-img-water');
        overlayBg.classList.add('bg-waterSUB');

    }
    if (type == 'grass') {
        overlayImage.classList.add('bg-img-grass');
        overlayBg.classList.add('bg-grassSUB');

    }

    if (type == 'electric') {
        overlayImage.classList.add('bg-img-electric');
                overlayBg.classList.add('bg-electricSUB');

    }
    if (type == 'bug') {
        overlayImage.classList.add('bg-img-bug');
        overlayBg.classList.add('bg-bugSUB');

    }
    if (type == 'normal') {
        overlayImage.classList.add('bg-img-normal');
        overlayBg.classList.add('bg-normalSUB');

    }
    if (type == 'poison') {
        overlayImage.classList.add('bg-img-poison');
        overlayBg.classList.add('bg-poisonSUB');

    }
    if (type == 'ground') {
        overlayImage.classList.add('bg-img-ground');
        overlayBg.classList.add('bg-groundSUB');

    }
    if (type == 'rock') {
        overlayImage.classList.add('bg-img-rock');
        overlayBg.classList.add('bg-rockSUB');

    }
    if (type == 'fairy') {
        overlayImage.classList.add('bg-img-fairy');
        overlayBg.classList.add('bg-fairySUB');

    }
    if (type == 'ghost') {
        overlayImage.classList.add('bg-img-ghost');
        overlayBg.classList.add('bg-ghostSUB');

    }
    if (type == 'ice') {
        overlayImage.classList.add('bg-img-ice');
        overlayBg.classList.add('bg-iceSUB');

    }
    if (type == 'fighting') {
        overlayImage.classList.add('bg-img-fighting');
        overlayBg.classList.add('bg-fightingSUB');

    }
    if (type == 'psychic') {
        overlayImage.classList.add('bg-img-psychic');
        overlayBg.classList.add('bg-psychicSUB');

    }
    if (type == 'dragon') {
        overlayImage.classList.add('bg-img-dragon');
        overlayBg.classList.add('bg-dragonSUB');

    }
}



function startSlider() {
    setTimeout(function () {
        document.getElementById('sliderimg1').style = 'transform: translateX(-100%)';
        document.getElementById('sliderimg2').style = 'transform: translateX(0)';
        document.getElementById('sliderimg3').style = 'transform: translateX(100%)';
    }, 3000);
    setTimeout(function () {
        document.getElementById('sliderimg1').style = 'transform: translateX(-200%)';
        document.getElementById('sliderimg2').style = 'transform: translateX(100%)';
        document.getElementById('sliderimg3').style = 'transform: translateX(0)';
    }, 6000);
    setTimeout(function () {
        document.getElementById('sliderimg1').style = 'transform: translateX(0)';
        document.getElementById('sliderimg2').style = 'transform: translateX(100%)';
        document.getElementById('sliderimg3').style = 'transform: translateX(200%)';
    }, 9000);
}

function pokedexTemplate(i, currentPokemon) {
    return  `<div id="pokedex-card" class="pokedex-card" style="width: 18rem;">
                <img onclick="createPokemonCard(${i})" id="pokemonImage${currentPokemon}" 
                src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" class="card-img-main">
         <div id="cardBodyElement${i}" class="card-body-pokemon">
               
        <div class="texts">
         <p class="texts1">${currentPokemon.name}</p>
         <p class="texts2">Type: ${currentPokemon.types[0].type.name}</p>
        </div>
    </div>`;
}

function overlayCardTemplate(i, selectedPokemon) {
    return `
    <div> <button id="previousButton" onclick="previousPokemon(${i})"><</button>
    </div>        
        <div id="contentOverlay${i}" class="width-resp content-overlay">      
            <div id="NameAndType">
            <div id="overlayTop">
            <div id="pokemonNumber">#${selectedPokemon.id}</div>
            

                <div id="pokemonName" class="overlay-name">${selectedPokemon.name}</div>
                    <p id="pokemonType${selectedPokemon.name}" class="">Type: ${selectedPokemon.types[0].type.name}</p>
                    </div>
                    <div id="pokemonWeight">Weight: ${selectedPokemon.weight}</div>
                        <div id="elementIcon${i}"><img id="elementIconBig" src="">
                </div>
                     
                            <img class="image-overlay"id="pokemonOverlayImage" src="${selectedPokemon['sprites']['other']['home']['front_default']}"> 
                      
            </div>       

            <div id="OverlayBottom">
                <h1 id="headingStats">Stats</h1>
                    <div id="infoBars">
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
                            <button id="backButton" onclick="goBackToPokedex()">Back to Pokedex</button>
                        </div>   
                        <div class="media-buttons">
                        <button id="previousButtonMedia" onclick="previousPokemon(${i})"><</button>
                        <div><button id="nextButtonMedia" onclick="nextPokemon(${i})">></button></div>  
                        </div>
                    </div>
                </div>    
                    <div>
                    <button id="nextButton" onclick="nextPokemon(${i})">></button>
                    </div>  
                `;
}

function filteredPokemonTemplate(originalIndex, currentPokemon) {
    return `
    <div id="pokedex-card" class="pokedex-card" style="width: 18rem;">
        <img onclick="createPokemonCard(${originalIndex})" id="pokemonImage${currentPokemon}" 
            src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" class="card-img-main">
        <div id="cardBodyElement${originalIndex}" class="card-body-pokemon">
            <div class="texts">
                <p class="texts1">${currentPokemon.name}</p>
                <p class="texts2">Type: ${currentPokemon.types[0].type.name}</p>
            </div>
        </div>
    </div>`;
}


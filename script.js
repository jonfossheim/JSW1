import {
  bulbasaur,
  ivysaur,
  venusaur,
  charmander,
  charmeleon,
  charizard,
  squirtle,
  wartortle,
  blastoise,
} from './pokemon.js';

// Make Array of all pokemon
const pokemon = [
  charmander,
  charmeleon,
  charizard,
  bulbasaur,
  venusaur,
  ivysaur,
  squirtle,
  wartortle,
  blastoise,
];

const genInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const selectedPokemon = pokemon[genInt(0, pokemon.length)];

const statList = document.querySelector('#statList');
const langList = document.querySelector('#langList');
const typeList = document.querySelector('#typeList');
const heading = document.querySelector('.heading');

const statLi = statList.querySelectorAll('li');
const langLi = langList.querySelectorAll('li');

heading.innerHTML = selectedPokemon.name.english;

//stats
for (let i = 0; i < statLi.length; i++) {
  let statArr = Object.values(selectedPokemon.base);
  statLi[i].innerHTML = `${statLi[i].innerHTML} ${statArr[i]}`;
}

//names
for (let i = 0; i < langLi.length; i++) {
  let langArr = Object.values(selectedPokemon.name);
  langLi[i].innerHTML = `${langLi[i].innerHTML} ${langArr[i + 1]}`;
}

//types
for (let i = 0; i < selectedPokemon.type.length; i++) {
  typeList.innerHTML += `<li>${selectedPokemon.type[i]}</li>`;
}

const adjustBg = (pkmn) => {
  let selectedColor;
  switch (pkmn.type[0]) {
    case 'Water':
      selectedColor = '#0984e3';
      break;
    case 'Fire':
      selectedColor = '#d63031';
      break;
    case 'Grass':
      selectedColor = '#00b894';
      break;
    default:
      selectedColor = 'white';
      break;
  }
  document.body.style.backgroundColor = selectedColor;
};

adjustBg(selectedPokemon);

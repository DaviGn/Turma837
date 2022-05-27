import fetch from 'node-fetch';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

// Promise
function fetchWithPromise() {
  fetch(baseUrl).then((response) => {
    response.json().then((json) => {
      console.log(json);
    });
  });
}

fetchWithPromise();

// Async/await
async function fetchAsync() {
  const response = await fetch(baseUrl);
  const json = await response.json();
  console.log(json);
}

fetchAsync();

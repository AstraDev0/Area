import axios from 'axios';

async function getJokes() {
  try {
    const response = await axios.get(
      'https://official-joke-api.appspot.com/jokes/random',
      {
        headers: { Accept: 'application/json' },
      }
    );
    const res = response.data.setup + ' ' + response.data.punchline;
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function getArt() {
  try {
    const response = await axios.get('https://api.artic.edu/api/v1/artworks');
    const data = response.data.data;
    const randomArtwork = data[Math.floor(Math.random() * data.length)];
    let res =
      'Hello ! Random artwork from the Art Institute of Chicago: \n' +
      '**' +
      randomArtwork.title +
      ' :' +
      '**' +
      `\nhttps://www.artic.edu/iiif/2/${randomArtwork.image_id}/full/843,1000/0/default.jpg`;
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function getQuote() {
  try {
    const options = {
      method: 'POST',
      url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
      params: {
        cat: 'movies',
        count: '10',
      },
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// getrandompokemon
async function getRandomPokemon() {
  try {
    // The PokeAPI has data for 898 Pokemon, so we generate a random number between 1 and 898
    const pokemonId = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const pokemonData = response.data;
    const pokemonName = pokemonData.name;
    const pokemonImageUrl = pokemonData.sprites.front_default;
    let res = `Here is a random Pokemon info:\n\n**Name:** ${pokemonName}\n**Image URL:** ${pokemonImageUrl}`;
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export { getJokes, getArt, getQuote, getRandomPokemon };

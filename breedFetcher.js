const request = require('request');

const userInput = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  // Print the error if one occurred
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('Breed not found.');
  } else {
    const result = data[0].description;
    console.log(result);
  }
});
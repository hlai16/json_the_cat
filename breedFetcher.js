const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error);
    }
    // Print the error if one occurred
    const data = JSON.parse(body);
    if (!data[0]) {
      callback('Breed not found', null);
    } else {
      const result = data[0].description;
      callback(null, result);
    }
  });
};

module.exports = {
  fetchBreedDescription
};
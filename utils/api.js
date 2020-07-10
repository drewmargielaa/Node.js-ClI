
const axios = require('axios').default;

async function request(username) {
  const promise = new Promise((resolve, reject) => {
    axios.get('https://api.github.com/users/' + username, {
      params: {
            Accept: 'application/vnd.github.v3+json', // specify v3 of the api
          }
        })
        .then(function (response) {
          // handle success
          return resolve([response.data.email, response.data.avatar_url]);
        })
        .catch(function (error) {
          console.log("Error querying GitHub server:");
          console.log(error);
          return reject(null);
        });
  });
  return await promise;

}

module.exports = {
  request :  request
};
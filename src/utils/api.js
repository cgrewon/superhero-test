const baseUrl = "https://superheroapi.com/";
const Api = {
  search: (name) => {
    return new Promise((resolve, reject) => {
      
      // let url = "http://superherotest.rocmail1.com/json.txt";
      let url = `https://superhero-node-testserver.herokuapp.com/json/${name}`;


      var requestOptions = {
        method: "GET",
        headers: {
          "access-control-allow-origin": true,
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (Array.isArray(result)) {            
            resolve(result);
          } else {
            reject({ error: "Error while fetch api." });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default Api;

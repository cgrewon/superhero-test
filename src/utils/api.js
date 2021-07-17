const baseUrl = "https://superheroapi.com/";
const Api = {
  search: (name) => {
    return new Promise((resolve, reject) => {
      // let url = baseUrl + "search/" + name;
      // let url = "api/520147245898688/search/" + name;
      let url = "http://superherotest.rocmail1.com/json.txt";

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
            let res = result.filter((hero) => hero.name.includes(name));
            resolve(res);
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

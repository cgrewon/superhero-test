const baseUrl = "https://superheroapi.com/";
const Api = {
  search: (name) => {
    return new Promise((resolve, reject) => {
      // let url = baseUrl + "search/" + name;
      // let url = "api/520147245898688/search/" + name;
      let url =
        "https://public-bucket-challenges.s3.amazonaws.com/front-end-challenge/output2.json";

      var requestOptions = {
        method: "GET",
        redirect: "follow",
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

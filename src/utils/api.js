const Api = {
  search: (name) => {
    return new Promise((resolve, reject) => {
      // let url = baseUrl + "search/" + name;
      let url = "api/520147245898688/search/" + name;

      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.response == "success") {
            resolve(result.results);
          } else {
            reject(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default Api;

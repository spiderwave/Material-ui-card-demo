import axios from "axios";

export const getProducts = () => {
  var config = {
    method: "get",
    url: "http://localhost:5000/api/products",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

const axios = require("axios");
var dotenv = require("dotenv");
dotenv.config();
exports.getNews = function (req, res, next) {
  const { page } = req.params;
  axios
    .get(
      "https://dev.to/api/articles?api_key=ZRhAPuyBZSQkkBBAhDPHFmJA" +
        `&page=${page}`
    )
    .then(function (response) {
      res.send(response.data);
      // console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

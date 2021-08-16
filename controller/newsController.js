const axios = require("axios");
var dotenv = require("dotenv");
dotenv.config();
exports.getNews = function (req, res, next) {
  axios
    .get("https://dev.to/api/articles?api_key=" + process.env.NEWS_API_KEY)
    .then(function (response) {
      res.send(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

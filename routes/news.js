const express = require("express");
const router = express.Router();
const { getNews } = require("../controller/newsController");
router.get("/", getNews);
module.exports = router;

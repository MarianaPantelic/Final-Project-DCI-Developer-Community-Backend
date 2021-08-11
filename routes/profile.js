const express = require("express");
const router = express.Router();

const {
  getUserBlogs,
  getUserQuestions,
} = require("../controller/profileController");

router.route("/").get(getUserBlogs).get(getUserQuestions);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getUserPosts,
  getUserQuestions,
} = require("../controller/profileController");

router.route("/").get(getUserPosts).get(getUserQuestions);

module.exports = router;

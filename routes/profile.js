const express = require("express");
const router = express.Router();

const {
  getUserBlogs,
  getUserQuestions,
} = require("../controller/profileController");

router.route("/blog/:id").get(getUserBlogs);
router.route("/question/:id").get(getUserQuestions);

module.exports = router;

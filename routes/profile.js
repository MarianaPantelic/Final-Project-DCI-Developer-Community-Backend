const express = require("express");
const router = express.Router();

const {
  getUserBlogs,
  getUserQuestions,
} = require("../controller/profileController");

router.route("/:id").get(getUserBlogs).get(getUserQuestions);

module.exports = router;

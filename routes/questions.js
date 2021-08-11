const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);

const {
  getQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestion,
} = require("../controller/forumController");

router.route("/").get(getQuestions).post(addQuestion);

router
  .route("/:id")
  .get(getQuestion)
  .delete(deleteQuestion)
  .put(updateQuestion)

module.exports = router;
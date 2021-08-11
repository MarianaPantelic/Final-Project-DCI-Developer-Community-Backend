const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);

const {
  getAnswers,
  addAnswer,
  deleteAnswer,
  updateAnswer,
  getAnswer,
} = require("../controller/forumController");

router.route("/").get(getAnswers).post(addAnswer);

router
  .route("/:id")
  .get(getAnswer)
  .delete(deleteAnswer)
  .put(updateAnswer)

module.exports = router;
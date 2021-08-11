const express = require("express");
const router = express.Router();


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
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authenticator");
const { validateInputs } = require("../middleware/validator");
const { QuestionValidationRules } = require("../lib/validation/forumRules"); ;



const {
  getQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestion,
} = require("../controller/forumController");

router
  .route("/")
  .get(getQuestions)
  .post(validateInputs(QuestionValidationRules), auth, addQuestion);

router
  .route("/:id")
  .get(getQuestion)
  .delete(deleteQuestion)
  .put(updateQuestion)

module.exports = router;
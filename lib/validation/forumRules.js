const { body } = require("express-validator");

exports.QuestionValidationRules = [
  body("title")
    .isLength({ min: 5, max: 50 })
    .withMessage(
      "Title is required. Its length should be minimum 5 characters and maximum 50"
    ),
  body("topic")
    .isLength({ max: 10 })
    .withMessage(
      "Topic is required. Its length should be maximum 10 characters"
    ),
  body("content")
    .isLength({ min: 5, max: 200 })
    .withMessage(
      "Topic is required. Its length should be minimum 5 characters and maximum 200"
    ),
];
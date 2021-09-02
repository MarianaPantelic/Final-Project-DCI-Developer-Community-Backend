const { body } = require("express-validator");

exports.QuestionValidationRules = [
  body("title")
    .isLength({ min: 1 })
    .withMessage(
      "Title is required. Its length should be minimum 5 characters and maximum 50"
    ),
  body("content")
    .isLength({ min: 1 })
    .withMessage(
      "Topic is required. Its length should be minimum 5 characters and maximum 200"
    ),
];

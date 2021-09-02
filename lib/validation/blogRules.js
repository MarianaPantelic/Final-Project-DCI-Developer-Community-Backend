const { body } = require("express-validator");
exports.blogValidationRules = [
  body("title")
    .isLength({ min: 1 })
    .withMessage(
      "Title is required. Its length should be minimum 5 characters and maximum 200"
    ),
  body("content")
    .isLength({ min: 1 })
    .withMessage(
      "Content is required. Its length should be minimum 20 characters"
    ),
];

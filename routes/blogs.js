const express = require("express");
//Import the authenticator from the middlewares
const auth = require("../middleware/authenticator");
const { validateInputs } = require("../middleware/validator");
const { blogValidationRules } = require("../lib/validation/blogRules");

//create a new router
const router = express.Router();
const {
  getBlogs,
  addBlog,
  deleteBlog,
  increaseLikes,
  getBlog,
} = require("../controller/blogsController");

router
  .route("/")
  .get(getBlogs)
  .post(validateInputs(blogValidationRules), auth, addBlog);
router.route("/:id").get(getBlog).delete(deleteBlog).put(increaseLikes);

//export router to app.js
module.exports = router;

const Blog = require("../models/Blog");
const Question = require("../models/Forum");

exports.getUserBlogs = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const userBlogs = await Blog.find({ user: id });
    res.status(200).send(userBlogs);
    console.log(userBlogs);
  } catch (error) {
    next(error);
  }
};

exports.getUserQuestions = async (req, res, next) => {
  const id = req.params.id;

  console.log(id);
  try {
    const userQuestions = await Question.find({ user: id });
    res.status(200).send(userQuestions);
    console.log(userQuestions);
  } catch (error) {
    next(error);
  }
};

const Blog = require("../models/Blog");
const Question = require("../models/Question");

exports.getUserBlogs = async (req, res, next) => {
  const userName = req.query.user;

  console.log(userName);
  try {
    const userBlogs = await Blog.find({ user: userName });
    res.status(200).send(userBlogs);
    console.log(userBlogs);
  } catch (error) {
    next(error);
  }
};

exports.getUserQuestions = async (req, res, next) => {
  const userName = req.query.user;

  console.log(userName);
  try {
    const userQuestions = await Question.find({ user: userName });
    res.status(200).send(userQuestions);
    console.log(userQuestions);
  } catch (error) {
    next(error);
  }
};

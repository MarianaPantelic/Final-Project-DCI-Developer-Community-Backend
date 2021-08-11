const Post = require("../models/Post");
const Question = require("../models/Question");

exports.getUserPosts = async (req, res, next) => {
  const userName = req.query.user;

  console.log(userName);
  try {
    const userPosts = await Post.find({ user: userName });
    res.status(200).send(userPosts);
    console.log(userPosts);
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

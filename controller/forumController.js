const Question = require("../models/Forum");

exports.getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    console.log(questions);
    res.status(200).send(questions);
  } catch (error) {
    next(error);
  }
};
exports.addQuestion = async (req, res, next) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    next(error);
  }
};
exports.getQuestion = async (req, res, next) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
    res.status(200).send(question);
  } catch (error) {
    next(error);
  }
};
exports.deleteQuestion = async (req, res, next) => {
  const { id } = req.params;
  try {
    const question = await Question.findByIdAndDelete(id);
    res.status(200).send(question);
  } catch (error) {
    next(error);
  }
};
exports.updateQuestion = async (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  try {
    const question = await Question.findByIdAndUpdate(id, dt, { new: true });
    res.status(200).send(question);
  } catch (error) {
    next(error);
  }
};

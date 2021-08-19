const Question = require("../models/Forum");

exports.getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find().populate("user","firstName");
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


exports.addAnswer = async (req, res, next) => {
    const { id } = req.params;
    const dt = req.body;
    try {
      const answer = await Question.findByIdAndUpdate(id, dt, { new: true });
      res.status(200).send(answer);
    } catch (error) {
      console.log(error)
      next(error);
    }
};

exports.getAnswers = async (req, res, next) => {
  try {
    const answers = await Question.find().populate("user", "firstName");
    console.log(answers);
    res.status(200).send(answers);
  } catch (error) {
    console.log(error)
    next(error);
  }
};



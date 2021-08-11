const Question = require("../models/Question");

/* Start of Questions area*/

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
/* End of Questions area*/

/* Start of Answers area*/

exports.getAnswers = async (req, res, next) => {
  try {
    const answers = await Answers.find();
    console.log(answers);
    res.status(200).send(answers);
  } catch (error) {
    next(error);
  }
};
exports.addAnswer = async (req, res, next) => {
  try {
    const answer = new Answer(req.body);
    await answer.save();
    res.status(201).send(answer);
  } catch (error) {
    next(error);
  }
};
exports.getAnswer = async (req, res, next) => {
  const { id } = req.params;
  try {
    const answer = await Answer.findById(id);
    res.status(200).send(answer);
  } catch (error) {
    next(error);
  }
};
exports.deleteAnswer = async (req, res, next) => {
  const { id } = req.params;
  try {
    const answer = await Answer.findByIdAndDelete(id);
    res.status(200).send(answer);
  } catch (error) {
    next(error);
  }
};
exports.updateAnswer = async (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  try {
    const answer = await Answer.findByIdAndUpdate(id, dt, { new: true });
    res.status(200).send(answer);
  } catch (error) {
    next(error);
  }
};
/* End of Answers area*/

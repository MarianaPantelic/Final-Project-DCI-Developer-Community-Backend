const User = require("../models/User");

const createError = require("http-errors");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new createError.NotFound();
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const token = user.generateAuthToken();
    await user.save();
    const data = user.getPublicFields();
    res.status(200).header("auth", token).send({ token, user });
  } catch (e) {
    next(e);
  }
};

exports.loginUser = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email });
    const valid = await user.checkPassword(password);
    if (!valid) throw new createError.NotFound();
    const token = user.generateAuthToken();
    const data = user.getPublicFields();
    res.status(200).header("auth", token).send({ token, user });
  } catch (error) {
    next(error);
  }
};

exports.addImage = async (req, res, next) => {
  console.log("adding an image");
  const { id } = req.params;
  const dt = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, dt, { new: true });
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

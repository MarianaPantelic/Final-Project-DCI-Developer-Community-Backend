const Agenda = require("../models/Agenda");

exports.getAgenda = async (req, res, next) => {
  try {
    const agenda = await Agenda.find({});
    res.status(200).send(agenda);
  } catch (e) {
    next(e);
  }
};

exports.getDailyAgenda = async (req, res, next) => {
  let myDate = req.params.date;
  console.log(typeof myDate);
  console.log(req.params);
  try {
    const daily = await Agenda.find({ date: myDate });
    console.log("daily", daily);
    res.status(200).send(daily);
  } catch (e) {
    next(e);
  }
};

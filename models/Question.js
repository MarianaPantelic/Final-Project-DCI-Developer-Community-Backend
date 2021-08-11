//import mongoose so that we can use the library
const mongoose = require("mongoose");
//Destructuring schema from mongoose
const { Schema } = mongoose;

//DECLARATION OF THE Question SCHEMA
const QuestionSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  numberOfReplies: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Question", QuestionSchema);
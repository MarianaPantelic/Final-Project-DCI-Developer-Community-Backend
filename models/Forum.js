const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  topic: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  answer: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Question", QuestionSchema);

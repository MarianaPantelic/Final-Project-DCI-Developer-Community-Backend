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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  answer: {
    type: Array,
    required: false,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Question", QuestionSchema);

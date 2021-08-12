const mongoose = require("mongoose");
const { Schema } = mongoose;

const AgendaSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  topics: {
    type: Array,
  },
  resources: {
    type: Array,
  },
  exercises: {
    type: Array,
  },
  questions: {
    type: Array,
  },
  recording: {
    type: Object,
  },
});

module.exports = mongoose.model("Agenda", AgendaSchema);

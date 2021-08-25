//import mongoose so that we can use the library
const mongoose = require("mongoose");
//Destructuring schema from mongoose
const { Schema } = mongoose;

//DECLARATION OF THE SCHEMA
const BlogsSchema = new Schema({
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
  likes: {
    type: Number,
  },
  whoClicked: {
    type: Array,
  },
  image: {
    type: String,
  },
});

//CREATE AND EXPORT THE MODEL
module.exports = mongoose.model("Blog", BlogsSchema);

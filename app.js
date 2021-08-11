var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
<<<<<<< HEAD
const profileRouter = require("./routes/profile");
=======
var blogsRouter = require("./routes/blogs");

>>>>>>> 6da0155f08fe9480893e5fbfe2b381309433fd67

const { setCors } = require("./middleware/security");

var app = express();

//CONNECTING WITH MONGODB
mongoose.connect(
  `mongodb+srv://dbMariana:test1234@cluster0.u2n6q.mongodb.net/FinalProjectDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () =>
  console.log("Database connection established")
);

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(setCors);

app.use("/", indexRouter);
app.use("/users", usersRouter);
<<<<<<< HEAD
app.use("/profile", profileRouter);
=======
app.use("/blogs", blogsRouter);
>>>>>>> 6da0155f08fe9480893e5fbfe2b381309433fd67

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;

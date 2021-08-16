var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const profileRouter = require("./routes/profile");
var blogsRouter = require("./routes/blogs");
var forumRouter = require("./routes/forum");

const { setCors } = require("./middleware/security");

var app = express();

//CONNECTING WITH MONGODB
mongoose.connect(
  `mongodb+srv://Florin:test1234@cluster0.5jwqg.mongodb.net/Forum?retryWrites=true&w=majority`,
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
app.use("/profile", profileRouter);
app.use("/blogs", blogsRouter);
app.use("/forum", forumRouter);



app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;

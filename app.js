var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const profileRouter = require("./routes/profile");
const blogsRouter = require("./routes/blogs");
const forumRouter = require("./routes/forum");
const newsRouter = require("./routes/news");
const agendaRouter = require("./routes/agenda");

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
app.use("/profile", profileRouter);
app.use("/blogs", blogsRouter);
app.use("/forum", forumRouter);
app.use("/news", newsRouter);
app.use("/agenda", agendaRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;

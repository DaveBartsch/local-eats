// import express
var express = require("express");

// declare express as app
var app = express();

// import logger: morgan
var logger = require("morgan");

//added by default from npx express-generator
var path = require("path");
var cookieParser = require("cookie-parser");
// var createError = require("http-errors");
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//added by default from npx express-generator
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler (added by default)
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

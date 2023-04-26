var createError = require("http-errors");
var express = require("express");
const http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const PORT = process.env.PORT || "4000";
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
// app.use(express.static("build"));

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(cookieParser());
// app.use("/", indexRouter);
// app.use(express.static("public/build"));
// app.use("b2", express.static(path.join(__dirname, "unityBuild")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/play", (req, res) => {
  res.sendFile(path.join(__dirname, "unityBuild", "index.html"));
});
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// app.use(express.static("build"));
// app.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "", "index.html"));
// });
app.use("/api", usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

http.createServer(app).listen(PORT, () => {
  console.log("Server is up and running on port number " + PORT);
});
// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;

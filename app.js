const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const path = require("path");
const engine = require("ejs-locals");
const authRoutes = require("./app/routes/auth");
const profileRoutes = require("./app/routes/profile");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const config = require("./config");
const routes = require("./app/routes");

mongoose.connect(config.dbURI, () => {
  console.log("connected to mongodb");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//path
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  if (req.user) {
    res.locals.userType = req.user.constructor.modelName;
  }
  return next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use(routes);
//routes
app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

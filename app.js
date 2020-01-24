const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const path = require("path");
const engine = require("ejs-locals");
const config = require("./config/index");
const passportSetup = require("./config/passport-setup");
const Request = require("./models/request");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const routes = require("./app/routes");
const authRoutes = require("./app/routes/auth");
const profileRoutes = require("./app/routes/profile");
const adminRoutes = require("./app/routes/admin");

//path
app.use(express.static(path.join(__dirname, "public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(
  config.dbURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected to mongodb");
  }
);

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
    extended: true
  })
);

app.use(routes);

app.use("/auth", authRoutes);

app.use("/profile", profileRoutes);

app.use("/admin", adminRoutes);

//routes
app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

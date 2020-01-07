const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  googleId: String,
  email: String,
  mobile: Number,
  ftlFlag: Boolean,
  isAdmin: Boolean
});

const User = mongoose.model("users", userSchema);
module.exports = User;

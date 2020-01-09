const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
        type  :String,
        required : true
    },
  googleId: {
        type  :String,
        required : true
    },
  email: {
        type  :String,
        required : true
    },
  mobile: {
        type  :Number,
    },
  isVerified: {
        type  :Boolean
    },
  isAdmin: {
        type  :Boolean
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;

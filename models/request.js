const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
  requesterId: String,
  name: String,
  bloodGroup: String,
  createdOn: Date,
  requestStatus: String
});

const Request = mongoose.model("requests", requestSchema);
module.exports = Request;

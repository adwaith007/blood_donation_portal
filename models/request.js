const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
  requesterId: String,
  requesterName: String,
  requestBloodGroup: String,
  createdOn: Date,
  requestStatus: String
});

const Request = mongoose.model("requests", requestSchema);
module.exports = Request;

const mongoose = require("mongoose");
const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  mobileNumber: Number
});

const Donor = mongoose.model("donors", donorSchema);
module.exports = Donor;

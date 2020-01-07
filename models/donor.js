const mongoose = require("mongoose");
const donorSchema = new mongoose.Schema({
  donorName: String,
  donorBloodGroup: String,
  donorMobileNumber: Number
});

const Donor = mongoose.model("donors", donorSchema);
module.exports = Donor;

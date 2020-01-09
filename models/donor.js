const mongoose = require("mongoose");
const donorSchema = new mongoose.Schema({
  name: {
        type  :String,
        required : true
    },
  bloodGroup: {
        type  :String,
        required : true
    },
  mobileNumber: {
        type  :Number,
    }
});

const Donor = mongoose.model("Donor", donorSchema);
module.exports = Donor;

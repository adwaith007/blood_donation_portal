const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
  id: {
        type  :String,
        required : true
    },
  owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required : true
    },
  bloodGroup: {
        type  :String,
        required : true
    },
  createdOn: Date,
  requestStatus: {
        type  :String,
        required : true
    }
});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;

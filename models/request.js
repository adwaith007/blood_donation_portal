const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
  owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required : true
    },// refers to owners mongo db generated id. populate function can be chained along with query to request to get owner details.
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

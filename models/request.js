const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
  id: {
        type  :String,
        required : true
    },
  name: {
        type  :String,
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

const Request = mongoose.model("requests", requestSchema);
module.exports = Request;

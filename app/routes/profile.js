const router = require("express").Router();
//const users = require('./models/users');
const mongoose = require("mongoose");
const Request = require("../../models/request");
const bodyParser = require("body-parser");

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/google");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  console.log(req.user);
  Request.find({ $or: [{ _id: req.user._id }] }).then(createdRequests => {
    if (createdRequests) {
      var details = {
        user_details: req.user,
        request_details: createdRequests,
        no_of_requests: createdRequests.length
      };
      console.log(details);
      res.render("profile", { user: details });
    }
  });
});

router.post("/request/cancel", (req, res) => {
  var status = JSON.parse(req.body.cancel);
  console.log(req.body.status);
  Request.updateOne(
    { _id: status.id },
    { $set: { requestStatus: "cancelled" } },
    (err, res) => {
      console.log("updated successfully");
    }
  );
  res.redirect("/profile");
});

module.exports = router;

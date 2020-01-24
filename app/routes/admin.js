const router = require("express").Router();
const mongoose = require("mongoose");
const Request = require("../../models/request");
const User = require("../../models/users");
const Donor = require("../../models/donor");
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
  Request.find().then(allRequests => {
    console.log(allRequests);
    var details = {
      user_details: req.user,
      request_details: allRequests,
      no_of_requests: allRequests.length
    };
    console.log(details);
    res.render("admin", { user: details });
  });
});

router.get("/donor/add", (req, res) => {
  var mobileNumber = req.body.mobilenumber;
  var bloodGroup = req.body.bloodgroup;
  var donorName = req.body.donorname;
  new Donor({
    name: donorName,
    mobileNumber: mobileNumber,
    bloodGroup: bloodGroup
  })
    .save()
    .then(currentDonor => {
      console.log(currentDonor);
    });
  res.redirect("/admin");
});

router.post("/status/change", (req, res) => {
  var status = JSON.parse(req.body.status);
  console.log(status);
  if (status.val == "accepted") {
    Request.updateOne(
      { _id: status.id },
      { $set: { requestStatus: "accepted" } },
      (err, res) => {
        console.log("updated successfully");
      }
    );
  } else if (status.val == "rejected") {
    Request.updateOne(
      { _id: status.id },
      { $set: { requestStatus: "rejected" } },
      (err, res) => {
        console.log("updated successfully");
      }
    );
  }
  res.redirect("/admin");
});

module.exports = router;

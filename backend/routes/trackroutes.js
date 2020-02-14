const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Track = require("../models/tracks");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* GET ALL TRACKS */
router.get("/api/tracks", function(req, res) {
  Track.find(function(err, tracks) {
    if (err) {
      console.log("Error in getting data");
    }
    res.json(tracks);
  });
});

/* GET SINGLE track BY ID */
router.get("/api/tracks/:id", function(req, res) {
  console.log("hi");
  Track.findById(req.params.id, function(err, track) {
    if (err) return err;
    res.json(track);
  });
});

/* SAVE Track */
router.post("/api/track", function(req, res) {
  Track.create(req.body, function(err, track) {
    if (err) return err;
    res.json(track);
  });
});

module.exports = router;

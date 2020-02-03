var express = require("express");
var db = require("../models");
var path = require("path")

var router = express.Router();


router.post("/", function(req, res) {
    db.Contact.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.status(400).json(err);
        });
});

router.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/index.html"))

});

module.exports = router
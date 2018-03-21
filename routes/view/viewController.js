var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    res.render("home");
});

router.get("/saved", function(req, res){
    //do work required to get information for saved
    res.render("saved");
});

module.exports = router;
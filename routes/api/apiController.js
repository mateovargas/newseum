//ROUTES TO APIS
var express = require('express');
var scraper = require('../../scripts/scrape.js');
var headlines = require('../../controller/headline.js');
var notes = require("../../controller/note.js");
var mongoose = require('mongoose');
var db = require("../../models");

var router = express.Router();

router.get("/api/scrape", (req, res) => { 
    scraper.scrape(); 
    res.send("Scrape Complete");
});

router.get("/api/saved", (req, res) => {

    db.Article.find({}).then((dbArticle) => {
            res.json(dbArticle);
    }).catch((err) => {
        res.json(err);
    });
    

});

router.get("/api/:id", (req, res) => {

    var data = headlines.getOne(req.params.id);
    res.json(data);

});

router.post("/api/:id", (req, res) => {

    var data = notes.createNote(req.params.id, req.body);
    res.json(data);

});

module.exports = router;
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

    db.Article.findOne({_id: req.params.id})
    .populate("note")
    .then(function(dbArticle){
        res.json(dbArticle);
    })
    .catch(function(err){
        res.json(err);
    })

});

router.post("/api/:id", (req, res) => {

    db.Note.create(req.body).then(function(dbNote){
        return db.Article.findOneAndUpdate({
            _id: req.params.i
        },{
            note: dbNote._id
        },{
           new: true
        }).then(function(dbArticle){
            res.json(dbArticle);
        }).catch(function(err){
            res.json(err);
        });
    });

});

module.exports = router;
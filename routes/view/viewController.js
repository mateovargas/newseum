//ROUTES TO VIEWS
var express = require('express');
var db = require('../../models');
var request = require('request');
var router = express.Router();

router.get("/", (req, res) => {res.render("home"); });

router.get("/saved", (req, res) => {

    db.Article.find({}).then((dbArticle) => {
        
        var hbsObject = {
            articles: dbArticle
        };

        res.render("saved", hbsObject);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
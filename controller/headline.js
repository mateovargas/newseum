//CONTROLLER TO DISPLAY HEADLINES
var mongoose = require('mongoose');
var db = require('../models');

var Headlines = {
    
    getAll: () => {

                db.Article.find({}).then((dbArticle) => {
                    return new Promise((resolve, reject) => {
                        return dbArticle;   
                    });
                }).catch((err) => {
                    return err;
                });
            },
    getOne: (id) => {

                db.Article.findOne({ _id: id })
                    .populate("note")
                    .then((dbArticle) => {
                        return dbArticle;
                    }).catch((err) => {
                        return err;
                    });
            }
    
}

module.exports = Headlines;
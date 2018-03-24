//CONTROLLER TO DISPLAY NOTES
var mongoose = require('mongoose');
var db = require('../models');

var notes = {

    createNote: (id, text) => {
        db.Note.create(text)
            .then((dbNote) => {
                return db.Article.findOneAndUpdate({ _id: id }, { note: dbNote._id }, { new: true });
            })
            .then((dbArticle) => {
                return dbArticle;
            })
            .catch((err) => {
                return err;
            });
    }
}

module.exports = notes;
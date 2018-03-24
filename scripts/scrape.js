var mongoose = require('mongoose');
var axios = require('axios');
var cheerio = require('cheerio');
var db = require('../models');


const scraper = {


    scrape: function () {

                axios.get("https://pitchfork.com/features/").then((response) => {

                    var $ = cheerio.load(response.data);

                    $(".article-details", "div").each(function (i, element) {

                        var result = {};
                        result.title = $(this).children("a").text();
                        result.link = $(this).children("a").attr("href");
                        db.Article.create(result).then((dbArticle) => {
                            console.log(dbArticle);
                        }).catch((err) => {
                            return res.json(err);
                        });

                    });
                });
            }
}

module.exports = scraper;
define(function(require, exports, module) {
    "use strict";

    // External dependencies.
    var Backbone = require("backbone");
    var url = "https://www.googleapis.com/books/v1/volumes?q=";
    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index",
            "search/:kw/:page/:perpage/": "search"
        },

        index: function() {
            console.log("main");
            var MainView = require("mainView");
            var view = new MainView();
            view.render();
        },

        search: function(kw, page, perpage) {
            console.log("search");
            var ListView = require("listView");
            var ItemCollection = require("itemCollection");
            var collection = new ItemCollection();
            collection.setUrl(url+kw);
            var view = new ListView({collection:collection});
            view.render(page, perpage);
        }

    });
});
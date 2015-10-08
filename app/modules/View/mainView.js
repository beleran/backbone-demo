define(function(require, exports, module) {
    "use strict";
    // External dependencies.
    var Backbone = require("backbone");
    module.exports = Backbone.View.extend({
        el:$("#header"),
        tagName:  "div",
        template: _.template($('#search-string').html()),
        events: {
            "click .search-button"   : "search"
        },


        initialize: function() {
        },


        render: function() {
            console.log(this.template());
            this.$el.html(this.template());
        },


        search: function() {
            app.router.navigate("search/" + this.$('.search-string').val()+"/0/20/", {trigger: true});
        }
    });
});
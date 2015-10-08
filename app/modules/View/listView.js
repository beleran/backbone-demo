define(function(require, exports, module) {
    "use strict";
    // External dependencies.
    var Backbone = require("backbone");
    module.exports = Backbone.View.extend({
        el:$("#result"),
        tagName:  "div",
        template: _.template($('#search-list').html()),
        events: {
            "click .nextpage"   : "next",
            "click .prevpage"   : "prev"
        },
        page:0,

        initialize: function(){
            this.listenTo( this.collection, 'reset add change remove', this.render, this );
            this.collection.fetch({success: function(data, response){
                console.log(response);
            }});
        },


        render: function() {
            this.$el.html(this.template());
        },

        next: function() {
            this.page++;
            this.render();
        },

        prev: function() {
            this.page++;
            this.render();
        }
    });
});
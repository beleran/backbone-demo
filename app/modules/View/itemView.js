define(function(require, exports, module) {
    "use strict";
    // External dependencies.
    var Backbone = require("backbone");

    module.exports = Backbone.View.extend({

        //... is a list tag.
        tagName:  "li",

        // Cache the template function for a single item.
        template: _.template($('#item-template').html()),

        // The DOM events specific to an item.
        events: {
            "click .image"   : "showDetails",
            "click .buy"     : "addToCart"
        },

        // The TodoView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Todo** and a **TodoView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('done', this.model.get('done'));
            this.input = this.$('.edit');
            return this;
        },

        showDetails: function() {
            this.model.toggle();
        },

        addToCart: function() {
            this.model.toggle();
        },

        // Remove the item, destroy the model.
        clear: function() {
            this.model.destroy();
        }

    });
});
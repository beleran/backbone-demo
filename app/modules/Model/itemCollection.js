define(function(require, exports, module) {

    var Backbone = require("backbone");
    var Item = require("itemModel");


    var ItemList = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Item,

        comparator: 'order'
    });
    ItemList.prototype.setUrl = function(url){
        this.url = url;
    };
    // Defining the application router.
    module.exports = ItemList;
});
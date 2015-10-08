define(function(require, exports, module) {

    var Backbone = require("backbone");
    var Item = Backbone.Model.extend({
        attributes:{},

        // Default attributes for the todo item.
        defaults: function () {
            return {
                "kind": "books#volume",
                "id": "aJQILlLxRmAC",
                "etag": "SKPuBxITblc",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/aJQILlLxRmAC",
                "volumeInfo": {
                    "title": "Python Programming",
                    "subtitle": "An Introduction to Computer Science",
                    "authors": [
                        "John M. Zelle"
                    ],
                    "publisher": "Franklin, Beedle & Associates, Inc.",
                    "publishedDate": "2004",
                    "description": "This book is suitable for use in a university-level first course in computing (CS1), as well as the increasingly popular course known as CS0. It is difficult for many students to master basic concepts in computer science and programming. A large portion of the confusion can be blamed on the complexity of the tools and materials that are traditionally used to teach CS1 and CS2. This textbook was written with a single overarching goal: to present the core concepts of computer science as simply as possible without being simplistic.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9781887902991"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "1887902996"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 517,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "averageRating": 4.0,
                    "ratingsCount": 20,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com.ua/books/content?id=aJQILlLxRmAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com.ua/books/content?id=aJQILlLxRmAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com.ua/books?id=aJQILlLxRmAC&printsec=frontcover&dq=python&hl=&cd=1&source=gbs_api",
                    "infoLink": "http://books.google.com.ua/books?id=aJQILlLxRmAC&dq=python&hl=&source=gbs_api",
                    "canonicalVolumeLink": "http://books.google.com.ua/books/about/Python_Programming.html?hl=&id=aJQILlLxRmAC"
                },
                "saleInfo": {
                    "country": "UA",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "UA",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://books.google.com.ua/books/reader?id=aJQILlLxRmAC&hl=&printsec=frontcover&output=reader&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "This book is suitable for use in a university-level first course in computing (CS1), as well as the increasingly popular course known as CS0."
                }
            };
        }


    });

    // Defining the application router.
    module.exports = Item;
});
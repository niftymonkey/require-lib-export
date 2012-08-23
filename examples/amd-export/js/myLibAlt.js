// ------------------------------------------------------------
// myLib AMD config
// ------------------------------------------------------------
require.config({

    // paths to scripts
    paths: {

        // 3rd Party Libraries
        jquery: "libs/jquery-1.7.2-min",

        // Internal library modules
        helloModule: "myLib/helloModule"
    }

});

// ------------------------------------------------------------
// This function defines our library object and exposes it on
// the global object of choice
// ------------------------------------------------------------
(function (root) {
    'use strict';

    // Make sure you add any library dependencies here, even if you're going to
    // load them with a synchronous require() call inside the define
    define(['require', 'jquery', 'helloModule'], function(require) {
        "use strict";

        var $, lib;

        // load jquery
        $ = require("jquery");

        // build an object that represents this library's public interface
        lib = {

            // The human-readable name of your library
            name: "My Library",

            // having your library return version information is useful
            version : "1.0",
            getVersionInfo: function () {
                return this.name + " v" + this.version;
            },

            // HelloModule returns a constructor function, so just expose that function here
            // this will allow the following:   new MyLib.HelloModule()
            HelloModule: require("helloModule"),

            // helper function that uses jQuery
            showPageTitle: function (pageDocumentObject) {
                var url = $(pageDocumentObject).attr('title');
                alert(url);
            }
        };

        // attach the library to the global root object
        root["MyLib"] = lib;

        // log to console that we've successfully loaded library dependencies
        // and built up our library object 
        console.log(lib.getVersionInfo() + " loaded");
    });

}(this)); // calling our library with "this" will place this library on the window global

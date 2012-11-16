// ------------------------------------------------------------
// If AMD is available, setup our config
// ------------------------------------------------------------
if (typeof require === 'function' && require.config) {

    require.config({

        // paths to scripts
        paths: {

            // 3rd Party Libraries
            jquery: "libs/jquery-1.7.2-min",

            // Internal library modules
            helloModule: "myLib/helloModule"
        }

    });
}

// ------------------------------------------------------------
// UMD-style exporting using a lib creation factory function
// ------------------------------------------------------------
(function (root, factory) {
    'use strict';

    // if AMD is available
    if (typeof define === 'function' && define.amd) {

        define(['require', 'jquery', 'helloModule'], function(require) {
            console.log("AMD");
            return factory(require);  // attach the library to the global root object
        });

        // otherwise, use browser globals
    } else {
        console.log("Globals");
        root["MyLib"] = factory(root.require); // attach the library to the global root object
    }

// call this function using "this" and our library creation method 
}(this, function(require) {
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

    // log to console that we've successfully loaded library dependencies
    // and built up our library object 
    console.log(lib.getVersionInfo() + " loaded");

    // return our library object
    return lib;
}));

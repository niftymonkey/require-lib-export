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
// Export myLib onto the global object as the namespace: MyLib
// ------------------------------------------------------------
(function (global) {
    "use strict";

    require(['require', 'myLib'], function (require) {
        global["MyLib"] = require("myLib");
    });

}(window)); // window is the global we'll attach our lib to



// ------------------------------------------------------------
// Define the library we're going to export
// ------------------------------------------------------------
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

    // log to console that we've successfully loaded library dependencies
    // and built up our library object 
    console.log(lib.getVersionInfo() + " loaded");

    // return our library object
    return lib;
});

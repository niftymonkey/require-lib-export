// Hello Module
define([], function () {
    "use strict";

    // contructor function to return when this module is loaded
    return function (name) {
        
        // test for name
        if (name === undefined)
            name = "World";
        
        // Expose a hello function on this object 
        this.hello = function () {
            alert("Hello " + name); 
        };
    };

});
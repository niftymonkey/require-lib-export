require.config({

    // paths to scripts
    paths: {
        
        // 3rd Party Libraries
        jquery: "libs/jquery-1.7.2-min",
        
        // Internal library modules
        helloModule: "myLib/helloModule"
    }
    
});

// Library Export function
require(['jquery', 'helloModule'], function($, HelloModule) {
    "use strict";

    // Manually attaching "MyLib" namespace object to the global window object as a means of exporting the lib
    window.MyLib = {

        // HelloModule returns a constructor function, so just expose that function here
        // this will allow the following:   new MyLib.HelloModule()
        HelloModule: HelloModule,
        
        // helper function that uses jQuery
        showPageTitle: function (pageDocumentObject) {
            var url = $(pageDocumentObject).attr('title');
            alert(url);
        }
    };
    
    // log that the library is loaded
    console.log("Library Loaded");

});
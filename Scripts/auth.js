"use strict";

(function() {
    function Start()
    {
        console.log("auth started...");
        val_cookie();
        //call the loader
    }

    function val_cookie(){
        let cookie = document.cookie;
        console.log(cookie);
        load_page();
    }

    function load_page()
    {
        let XHR = new XMLHttpRequest();

        XHR.open("GET", "./Partial/java_main.html");
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let main_body = document.getElementsByTagName("main")[0];
            main_body.innerHTML = XHR.responseText;

        })
    }

    window.addEventListener("load", Start, false);
})();
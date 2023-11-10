"use strict";

(function() { 
    function Start()
    {
        console.log("javascript loaded...");
        val_cookie();
    }
   
    function val_cookie(){
        let cookie = document.cookie;
        console.log(cookie);
        if(cookie === "username=peter welly"){
            load_page();
        } else {
            //window.location.replace("https://skamino.github.io/javasite/index.html");
            //console.log("something not working2");
        }
    }

    window.addEventListener("load", Start, false);
})();
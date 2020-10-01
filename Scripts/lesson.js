"use strict";

(function() {
    function Start()
    {
        let homebutton = document.getElementsByTagName('a');
        homebutton.addEventListener("click", (event)=>{
            event.preventDefault();
            window.location.replace("https://skamino.github.io/javasite/");   
        })
    }
    window.addEventListener("load", Start, false);
})();
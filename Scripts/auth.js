"use strict";

(function() {
    function Start()
    {
        console.log("auth started...");
        val_cookie();
    }

    function val_cookie(){
        let cookie = document.cookie;
        //console.log(cookie);
        if(cookie === "peter welly"){
            load_page();
        } else {
            window.location.replace("https://www.google.ca");
        }

    }

    function load_page()
    {
        let XHR = new XMLHttpRequest();

        XHR.open("GET", "./Partial/java_main.html");
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let main_body = document.getElementsByTagName("main")[0];
            main_body.innerHTML = XHR.responseText;
//first lets add callbacks to the main buttons
            let git_button = document.getElementById("toGit");
            git_button.addEventListener("click", (event) =>{
                event.preventDefault();
                window.location.replace("https://github.com/skamino");   
            });
            let exit_button = document.getElementById("exit");
            exit_button.addEventListener("click", (event) =>{
                event.preventDefault();
                window.location.replace("https://skamino.github.io/javasite/index.html");
            });
            let lesson1 = document.getElementById("lesson1");
            lesson1.addEventListener("click", (event) =>{
                event.preventDefault();
                //call function to reload page
            });
            let src1 = document.getElementById("src1");
            src1.addEventListener("click", (event) =>{
                event.preventDefault();
                //call function to reload page
            })
        })
    }

    window.addEventListener("load", Start, false);
})();